import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function debugOptions() {
  console.log('Fetching one matching question...');
  
  const { data: questions, error } = await supabase
    .from('questions')
    .select('id, content, options, question_type')
    .eq('question_type', 'MATCHING')
    .limit(1);

  if (error) {
    console.error('Error:', error);
    return;
  }

  if (questions && questions.length > 0) {
    const q = questions[0];
    console.log('Question ID:', q.id);
    console.log('Type:', q.question_type);
    console.log('Options Type:', typeof q.options);
    console.log('Options Value:', q.options);
    
    if (typeof q.options === 'string') {
      console.log('⚠️ Options is a STRING! It should be an object/array.');
    } else {
      console.log('✅ Options is an object/array.');
    }
  } else {
    console.log('No matching questions found.');
  }
}

debugOptions();
