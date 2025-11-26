import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { questionId, type, userAnswer, questionContent, options, imageUrl } = await request.json();
    
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Fetch question details only if context is missing
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let question: any = {
      content: questionContent,
      options,
      image_url: imageUrl,
      correct_answer: null, // We might need this for grading, so fetch if needed
      explanation: null
    };

    if (!questionContent) {
      const { data: dbQuestion, error } = await supabase
        .from('questions')
        .select('*')
        .eq('id', questionId)
        .single();

      if (error || !dbQuestion) {
        return NextResponse.json({ error: 'Question not found' }, { status: 404 });
      }
      question = dbQuestion;
    } else {
      // If we have context but need correct answer/explanation
      if (type === 'grade' || type === 'explain' || type === 'hint') {
         const { data: dbQuestion } = await supabase
          .from('questions')
          .select('correct_answer, explanation')
          .eq('id', questionId)
          .single();
          
          if (dbQuestion) {
            question.correct_answer = dbQuestion.correct_answer;
            question.explanation = dbQuestion.explanation;
          }
      }
    }

    let responseText = '';

    // Mock AI Logic (since no LLM key is available)
    // In a real scenario, this would call OpenAI/Gemini API with a prompt
    
    if (type === 'hint') {
      responseText = `Here is a hint for you: ${question.explanation || "Review the topic related to this question."}`;
    } else if (type === 'explain') {
      responseText = `Explanation: ${question.explanation || "The correct answer is derived from the core principles of the topic."}`;
    } else if (type === 'grade') {
      // Simple grading logic
      const isCorrect = JSON.stringify(userAnswer) === JSON.stringify(question.correct_answer) || 
                        (typeof userAnswer === 'string' && userAnswer.trim().toLowerCase() === question.correct_answer.trim().toLowerCase());
      
      if (isCorrect) {
        responseText = "Great job! Your answer is correct. " + (question.explanation || "");
      } else {
        responseText = "That's not quite right. " + (question.explanation || "Try reviewing the material.");
      }
    } else {
      responseText = "I'm here to help! You can ask for a hint or an explanation.";
    }

    return NextResponse.json({ message: responseText });
  } catch (error) {
    console.error('AI Assist Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
