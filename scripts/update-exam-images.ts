import fs from 'fs';
import path from 'path';

const EXAMS_DIR = path.join(process.cwd(), 'scripts/data/exams');
const MAP_PATH = path.join(process.cwd(), 'scripts/data/image-map.json');

async function updateExamImages() {
  console.log('Starting exam image update...');

  if (!fs.existsSync(MAP_PATH)) {
    console.error(`Image map not found: ${MAP_PATH}`);
    return;
  }

  const imageMap = JSON.parse(fs.readFileSync(MAP_PATH, 'utf-8'));
  const examFiles = fs.readdirSync(EXAMS_DIR).filter(file => file.endsWith('.ts'));

  for (const file of examFiles) {
    const filePath = path.join(EXAMS_DIR, file);
    console.log(`Processing ${file}...`);
    
    let content = fs.readFileSync(filePath, 'utf-8');
    let updated = false;

    for (const [localPath, remoteUrl] of Object.entries(imageMap)) {
      if (content.includes(localPath)) {
        // Replace all occurrences
        content = content.split(localPath).join(remoteUrl as string);
        updated = true;
        console.log(`  Replaced: ${localPath}`);
      }
    }

    if (updated) {
      fs.writeFileSync(filePath, content);
      console.log(`✓ Updated ${file}`);
    } else {
      console.log(`- No changes needed for ${file}`);
    }
  }

  console.log('\nAll exam files processed.');
}

updateExamImages().catch(console.error);
