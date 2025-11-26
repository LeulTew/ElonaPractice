import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function debugOrder() {
  console.log('Fetching questions for exam-cnp-ch1...');
  
  const { data: questions, error } = await supabase
    .from('questions')
    .select('order_index, question_type, id')
    .eq('exam_id', 'exam-cnp-ch1')
    .order('order_index');

  if (error) {
    console.error('Error:', error);
    return;
  }

  console.log(`Total questions: ${questions.length}`);
  console.log('First 20 questions:');
  questions.slice(0, 20).forEach(q => {
    console.log(`${q.order_index}: ${q.question_type}`);
  });
  
  console.log('...');
  
  // Check for type mixing
  let lastType = '';
  let mixCount = 0;
  questions.forEach(q => {
    if (q.question_type !== lastType) {
      console.log(`Type switch at index ${q.order_index}: ${lastType} -> ${q.question_type}`);
      lastType = q.question_type;
      mixCount++;
    }
  });
  
  console.log(`Total type switches: ${mixCount}`);
}

debugOrder();
