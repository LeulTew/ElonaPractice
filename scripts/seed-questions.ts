import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { EXAM_1_CONTENT } from './data/exams/ch1';
import { EXAM_2_CONTENT } from './data/exams/ch2';
import { EXAM_3_CONTENT } from './data/exams/ch3';
import { EXAM_FINAL_CONTENT } from './data/exams/final';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function seedQuestions() {
  console.log('Seeding questions...');

  const examData = [
    { examId: 'exam-cnp-ch1', questions: EXAM_1_CONTENT },
    { examId: 'exam-cnp-ch2', questions: EXAM_2_CONTENT },
    { examId: 'exam-cnp-ch3', questions: EXAM_3_CONTENT },
    { examId: 'exam-cnp-final', questions: EXAM_FINAL_CONTENT }
  ];

  for (const { examId, questions } of examData) {
    console.log(`\nSeeding ${questions.length} questions for ${examId}...`);

    // Delete existing questions for this exam
    const { error: deleteError } = await supabase
      .from('questions')
      .delete()
      .eq('exam_id', examId);

    if (deleteError) {
      console.error(`Error deleting old questions for ${examId}:`, deleteError);
      continue;
    }

    // Insert new questions
    const questionsToInsert = questions.map((q, index) => {
      // Map ORDER_SEQUENCE to MATCHING with metadata flag
      const questionType = q.type === 'ORDER_SEQUENCE' ? 'MATCHING' : q.type;
      const metadata: Record<string, unknown> = {
        ...(q.metadata || {}),
        image_url: q.image || null
      };
      
      if (q.type === 'ORDER_SEQUENCE') {
        metadata.real_type = 'ORDER_SEQUENCE';
      }

      return {
        exam_id: examId,
        content: q.content,
        question_type: questionType,
        options: q.options || null,
        correct_answer: q.correctAnswer,
        explanation: q.explanation || null,
        points: 1,
        order_index: index,
        metadata
      };
    });

    const { error: insertError } = await supabase
      .from('questions')
      .insert(questionsToInsert);

    if (insertError) {
      console.error(`Error inserting questions for ${examId}:`, insertError);
    } else {
      console.log(`✓ Inserted ${questionsToInsert.length} questions for ${examId}`);
    }
  }

  console.log('\n✅ Question seeding complete!');
}

seedQuestions().catch(console.error);
