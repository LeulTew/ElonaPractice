import fs from 'fs';
import path from 'path';
import AdmZip from 'adm-zip';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const COURSES_DIR = path.join(process.cwd(), 'Courses');
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

interface ExtractedImage {
  courseName: string;
  fileName: string;
  slideNumber: number;
  buffer: Buffer;
  extension: string;
}

async function extractImages(): Promise<ExtractedImage[]> {
  console.log('Extracting images from PPTX files...');
  const images: ExtractedImage[] = [];

  if (!fs.existsSync(COURSES_DIR)) {
    console.error(`Courses directory not found: ${COURSES_DIR}`);
    return images;
  }

  const courseDirs = fs.readdirSync(COURSES_DIR).filter(file =>
    fs.statSync(path.join(COURSES_DIR, file)).isDirectory()
  );

  for (const courseDir of courseDirs) {
    const fullCourseDir = path.join(COURSES_DIR, courseDir);
    const files = fs.readdirSync(fullCourseDir).filter(file => file.endsWith('.pptx'));

    for (const file of files) {
      const filePath = path.join(fullCourseDir, file);
      console.log(`Processing: ${file}`);

      try {
        const zip = new AdmZip(filePath);
        const zipEntries = zip.getEntries();

        // Find all media files
        const mediaEntries = zipEntries.filter(entry =>
          entry.entryName.startsWith('ppt/media/')
        );

        for (const mediaEntry of mediaEntries) {
          const mediaName = path.basename(mediaEntry.entryName);
          const ext = path.extname(mediaName).toLowerCase();

          // Only process images
          if (['.png', '.jpg', '.jpeg', '.gif', '.svg'].includes(ext)) {
            // Try to determine slide number from relationships
            const slideNum = await getSlideNumberForMedia(zip, mediaName);

            images.push({
              courseName: courseDir,
              fileName: path.basename(file, '.pptx'),
              slideNumber: slideNum,
              buffer: mediaEntry.getData(),
              extension: ext
            });
          }
        }
      } catch (error) {
        console.error(`Error processing ${file}:`, error);
      }
    }
  }

  console.log(`Extracted ${images.length} images`);
  return images;
}

async function getSlideNumberForMedia(zip: AdmZip, mediaName: string): Promise<number> {
  // Try to find which slide references this media
  const zipEntries = zip.getEntries();
  const relsEntries = zipEntries.filter(entry =>
    entry.entryName.match(/ppt\/slides\/_rels\/slide\d+\.xml\.rels/)
  );

  for (const relsEntry of relsEntries) {
    const relsXml = relsEntry.getData().toString('utf8');
    if (relsXml.includes(mediaName)) {
      const match = relsEntry.entryName.match(/slide(\d+)/);
      if (match) {
        return parseInt(match[1]);
      }
    }
  }

  return 0; // Unknown slide
}

async function uploadToSupabase(images: ExtractedImage[]): Promise<Map<string, string>> {
  console.log('\nUploading images to Supabase...');
  const urlMap = new Map<string, string>();

  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    const sanitizedCourse = img.courseName.replace(/[^a-zA-Z0-9]/g, '_');
    const sanitizedFile = img.fileName.replace(/[^a-zA-Z0-9]/g, '_');
    const fileName = `${sanitizedCourse}/${sanitizedFile}_slide${img.slideNumber}_${i}${img.extension}`;

    try {
      const { error } = await supabase.storage
        .from('course-images')      
        .upload(fileName, img.buffer, {
          contentType: `image/${img.extension.slice(1)}`,
          upsert: true
        });

      if (error) {
        console.error(`Error uploading ${fileName}:`, error.message);
        continue;
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from('course-images')
        .getPublicUrl(fileName);

      urlMap.set(fileName, urlData.publicUrl);
      console.log(`✓ Uploaded: ${fileName}`);
    } catch (error) {
      console.error(`Failed to upload ${fileName}:`, error);
    }
  }

  console.log(`\nUploaded ${urlMap.size} images to Supabase`);
  return urlMap;
}

async function main() {
  console.log('Starting image extraction and upload process...\n');

  // Extract images from PPTX files
  const images = await extractImages();

  if (images.length === 0) {
    console.log('No images found to upload');
    return;
  }

  // Upload to Supabase
  const urlMap = await uploadToSupabase(images);

  // Save manifest
  const manifest = Array.from(urlMap.entries()).map(([path, url]) => ({ path, url }));
  fs.writeFileSync(
    path.join(process.cwd(), 'image-manifest.json'),
    JSON.stringify(manifest, null, 2)
  );

  console.log('\nImage manifest saved to image-manifest.json');
  console.log(`Total images available: ${manifest.length}`);
}

main().catch(console.error);
