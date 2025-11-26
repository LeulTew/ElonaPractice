import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function setupBucket() {
  console.log('Checking bucket course-images...');
  
  const { data: buckets, error } = await supabase.storage.listBuckets();
  
  if (error) {
    console.error('Error listing buckets:', error);
    return;
  }
  
  const bucketExists = buckets.some(b => b.name === 'course-images');
  
  if (bucketExists) {
    console.log('✅ Bucket course-images exists.');
    // Ensure it's public
    await supabase.storage.updateBucket('course-images', { public: true });
  } else {
    console.log('Bucket course-images does not exist. Creating...');
    const { error: createError } = await supabase.storage.createBucket('course-images', {
      public: true,
      fileSizeLimit: 10485760, // 10MB
      allowedMimeTypes: ['image/png', 'image/jpeg', 'image/svg+xml']
    });
    
    if (createError) {
      console.error('Error creating bucket:', createError);
    } else {
      console.log('✅ Bucket course-images created successfully.');
    }
  }
}

setupBucket();
