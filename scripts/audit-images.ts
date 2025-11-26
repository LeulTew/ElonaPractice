import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'course-images');

async function getFiles(dir: string): Promise<string[]> {
  const dirents = await fs.promises.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(dirents.map((dirent) => {
    const res = path.resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res) : res;
  }));
  return Array.prototype.concat(...files);
}

async function auditImages() {
  console.log('Auditing images...');

  // 1. Get all local files
  const allFiles = await getFiles(IMAGES_DIR);
  const localImages = allFiles.filter(f => ['.png', '.svg', '.jpg', '.jpeg'].includes(path.extname(f).toLowerCase()));
  
  console.log(`Found ${localImages.length} local images.`);

  // 2. Get all used images from DB
  const { data: questions, error } = await supabase
    .from('questions')
    .select('metadata')
    .not('metadata->>image_url', 'is', null);

  if (error) {
    console.error('Error fetching questions:', error);
    return;
  }

  const usedUrls = new Set(questions?.map(q => q.metadata.image_url) || []);
  console.log(`Found ${usedUrls.size} unique used image URLs.`);

  // 3. Compare
  const unusedImages: string[] = [];
  const unusedSubfolderImages: string[] = [];

  for (const filePath of localImages) {
    const relativePath = path.relative(PUBLIC_DIR, filePath); // e.g., course-images/ch1/file.svg
    const fileName = path.basename(filePath);
    
    // Check if used (by checking if the URL contains the filename)
    // This is a loose check but sufficient since filenames are unique enough
    const isUsed = Array.from(usedUrls).some(url => url.includes(fileName));

    if (!isUsed) {
      unusedImages.push(relativePath);
      if (relativePath.split(path.sep).length > 2) { // Inside subfolder (course-images/ch1/...)
        unusedSubfolderImages.push(relativePath);
      }
    }
  }

  console.log(`\n--- Unused Subfolder Images (MUST ADD QUESTIONS) ---`);
  unusedSubfolderImages.forEach(f => console.log(f));

  console.log(`\n--- Unused Root Images (CAN REMOVE) ---`);
  unusedImages.filter(f => !unusedSubfolderImages.includes(f)).forEach(f => console.log(f));
}

auditImages().catch(console.error);
