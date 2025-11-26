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
    // Filter out questions with images that are NOT in the new structure
    const validQuestions = questions.filter(q => {
      if (!q.image) return true; // Keep text-only questions
      return q.image.includes('Chemistry_of_Natural_Product_CNP');
    });

    // Map types first (ORDER_SEQUENCE -> MATCHING) so they sort together
    const mappedQuestions = validQuestions.map(q => ({
      ...q,
      type: q.type === 'ORDER_SEQUENCE' ? 'MATCHING' : q.type,
      _originalType: q.type
    }));

    // Sort questions by type to ensure sequential numbering in groups
    const sortedQuestions = [...mappedQuestions].sort((a, b) => a.type.localeCompare(b.type));

    const questionsToInsert = sortedQuestions.map((q, index) => {
      const isOrderSequence = q._originalType === 'ORDER_SEQUENCE';
      const metadata: Record<string, unknown> = {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...((q as any).metadata || {}),
        image_url: q.image || null,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        hint: (q as any).hint || generateSubtleHint(q.content, q.type),
        original_type: isOrderSequence ? 'ORDER_SEQUENCE' : undefined
      };
      
      const questionType = q.type; // Already mapped to MATCHING if needed
      if (isOrderSequence) { // Added this if block to correctly set real_type
        metadata.real_type = 'ORDER_SEQUENCE';
      }

      return {
        exam_id: examId,
        content: q.content,
        question_type: questionType,
        options: q.options || null,
        correct_answer: q.correctAnswer,
        explanation: q.explanation,
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

function generateSubtleHint(content: string, type: string): string {
  const lowerContent = content.toLowerCase();
  
  if (lowerContent.includes('chiral') || lowerContent.includes('enantiomer') || lowerContent.includes('stereocenter')) {
    return "Consider the spatial arrangement of atoms and symmetry.";
  }
  if (lowerContent.includes('mechanism') || lowerContent.includes('reaction')) {
    return "Focus on the movement of electrons and the stability of intermediates.";
  }
  if (lowerContent.includes('acid') || lowerContent.includes('base') || lowerContent.includes('pka')) {
    return "Recall the definitions of acids/bases and factors affecting their strength.";
  }
  if (lowerContent.includes('nmr') || lowerContent.includes('spectroscopy') || lowerContent.includes('ir')) {
    return "Think about the specific signals or peaks associated with functional groups.";
  }
  if (lowerContent.includes('isomer')) {
    return "Review the different types of isomerism (structural, geometric, optical).";
  }
  if (type === 'CALCULATION' || type === 'CASE_STUDY') {
    return "Break down the problem into smaller steps and identify the key variables.";
  }
  
  return "Review the key concepts and definitions related to this topic.";
}

seedQuestions().catch(console.error);
