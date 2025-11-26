import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'course-images');
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function getFiles(dir: string): Promise<string[]> {
  const dirents = await fs.promises.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(dirents.map((dirent) => {
    const res = path.resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res) : res;
  }));
  return Array.prototype.concat(...files);
}

async function uploadImages() {
  console.log('Starting local image upload...');
  
  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`Images directory not found: ${IMAGES_DIR}`);
    return;
  }

  const files = await getFiles(IMAGES_DIR);
  const imageMap: Record<string, string> = {};
  let uploadCount = 0;

  for (const filePath of files) {
    const relativePath = path.relative(IMAGES_DIR, filePath); // e.g., Chemistry_of_Natural_Product_CNP/ch1/file.svg
    const webPath = '/course-images/' + relativePath; 
    
    // Skip if it's a directory (getFiles returns files, but just in case)
    if (fs.lstatSync(filePath).isDirectory()) continue;

    // Skip non-image files
    if (!['.svg', '.png', '.jpg', '.jpeg'].includes(path.extname(filePath).toLowerCase())) {
      continue;
    }

    const fileContent = await fs.promises.readFile(filePath);
    const storagePath = relativePath; // Use the same structure in storage

    try {
      const { error } = await supabase.storage
        .from('course-images')
        .upload(storagePath, fileContent, {
          contentType: `image/${path.extname(filePath).slice(1)}`,
          upsert: true
        });

      if (error) {
        console.error(`Error uploading ${relativePath}:`, error.message);
        continue;
      }

      const { data: urlData } = supabase.storage
        .from('course-images')
        .getPublicUrl(storagePath);

      imageMap[webPath] = urlData.publicUrl;
      console.log(`✓ Uploaded: ${relativePath} -> ${urlData.publicUrl}`);
      uploadCount++;
    } catch (error) {
      console.error(`Failed to upload ${relativePath}:`, error);
    }
  }

  console.log(`\nUploaded ${uploadCount} images.`);
  
  // Save the map
  const mapPath = path.join(process.cwd(), 'scripts/data/image-map.json');
  await fs.promises.writeFile(mapPath, JSON.stringify(imageMap, null, 2));
  console.log(`Image map saved to ${mapPath}`);
}

uploadImages().catch(console.error);
