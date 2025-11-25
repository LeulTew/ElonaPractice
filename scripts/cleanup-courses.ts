import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  console.log('Fetching courses...');
  const { data: courses, error } = await supabase.from('courses').select('*');

  if (error) {
    console.error('Error fetching courses:', error);
    return;
  }

  console.log(`Found ${courses.length} courses:`);
  courses.forEach(c => console.log(`- [${c.id}] ${c.title}`));

  const KEEP_ID = 'chemistry-of-natural-product-cnp-v2';
  
  const toDelete = courses.filter(c => c.id !== KEEP_ID).map(c => c.id);

  if (toDelete.length > 0) {
    console.log(`Deleting ${toDelete.length} old courses:`, toDelete);
    const { error: deleteError } = await supabase
      .from('courses')
      .delete()
      .in('id', toDelete);
      
    if (deleteError) {
      console.error('Error deleting courses:', deleteError);
    } else {
      console.log('Successfully deleted old courses.');
    }
  } else {
    console.log('No old courses to delete.');
  }
}

main().catch(console.error);
