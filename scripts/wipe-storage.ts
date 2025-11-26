import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function wipeStorage() {
  console.log('Wiping course-images bucket...');

  const { data: files, error } = await supabase
    .storage
    .from('course-images')
    .list('course-images', { limit: 1000, offset: 0 }); // List inside the folder

  if (error) {
    console.error('Error listing files:', error);
    return;
  }

  if (!files || files.length === 0) {
    console.log('Bucket is already empty or folder not found.');
    return;
  }

  // List of potential folders to check
  const folders = [
    '', 
    'course-images', 
    'course-images/course-images', 
    'ch1', 'ch2', 'ch3', 'final',
    'Chemistry_of_Natural_Product_CNP',
    'Chemistry_of_Natural_Product_CNP/ch1',
    'Chemistry_of_Natural_Product_CNP/ch2',
    'Chemistry_of_Natural_Product_CNP/ch3',
    'Chemistry_of_Natural_Product_CNP/final'
  ];
  
  for (const folder of folders) {
    let hasMore = true;
    while (hasMore) {
      const { data: files } = await supabase.storage.from('course-images').list(folder, { limit: 100 });
      
      if (files && files.length > 0) {
        const paths = files
          .filter(f => f.name !== '.emptyFolderPlaceholder')
          .map(f => folder ? `${folder}/${f.name}` : f.name);
        
        if (paths.length > 0) {
          console.log(`Deleting ${paths.length} files from '${folder || 'root'}'...`);
          const { error } = await supabase.storage.from('course-images').remove(paths);
          if (error) console.error(`Error deleting from ${folder}:`, error);
        } else {
          hasMore = false;
        }
      } else {
        hasMore = false;
      }
    }
  }
  
  console.log('✅ Storage wipe complete.');
}

wipeStorage();
