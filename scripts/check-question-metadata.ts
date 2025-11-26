import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkMetadata() {
  const { data: questions, error } = await supabase
    .from('questions')
    .select('exam_id, order_index, content, metadata, question_type, correct_answer')
    .in('question_type', ['CASE_STUDY', 'IDENTIFY_ERROR'])
    .order('exam_id')
    .order('order_index');

  if (error) {
    console.error('Error fetching questions:', error);
    return;
  }

  if (questions && questions.length > 0) {
    console.log(`Found ${questions.length} questions with images:`);
    questions.forEach(q => {
      console.log(`[${q.exam_id}] Q${q.order_index + 1} (${q.question_type}): ${q.metadata?.image_url ? q.metadata.image_url.split('/').pop() : 'No Image'}`);
    if (q.question_type === 'CASE_STUDY' || q.question_type === 'IDENTIFY_ERROR') {
      console.log(`   Answer: ${q.correct_answer ? 'Present' : 'MISSING'}`);
    }
      // console.log(`   URL: ${url}`);
    });
  } else {
    console.log('No questions found with image_url in metadata.');
  }
}

checkMetadata();
