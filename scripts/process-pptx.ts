import fs from 'fs';
import path from 'path';
import AdmZip from 'adm-zip';
import { parseStringPromise } from 'xml2js';

const COURSES_DIR = path.join(process.cwd(), 'Courses');
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'course-images');

// Ensure images directory exists
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

interface Question {
  course: string;
  sourceFile: string;
  slideNumber: number;
  content: string;
  imageUrl?: string;
}

async function processPptx(filePath: string, courseName: string, questions: Question[]) {
  console.log(`Processing: ${path.basename(filePath)}`);
  const zip = new AdmZip(filePath);
  const zipEntries = zip.getEntries();

  // Helper to get slide number from filename
  const getSlideNumber = (filename: string) => {
    const match = filename.match(/slide(\d+)\.xml/);
    return match ? parseInt(match[1]) : 0;
  };

  // Find slide files
  const slideEntries = zipEntries.filter(entry => 
    entry.entryName.startsWith('ppt/slides/slide') && entry.entryName.endsWith('.xml')
  );

  slideEntries.sort((a, b) => getSlideNumber(a.entryName) - getSlideNumber(b.entryName));

  for (const slide of slideEntries) {
    const slideNum = getSlideNumber(slide.entryName);
    const slideXml = slide.getData().toString('utf8');
    const result = await parseStringPromise(slideXml);
    
    // Extract text
    const texts: string[] = [];
    const findText = (obj: any) => {
      if (typeof obj === 'object') {
        for (const key in obj) {
          if (key === 'a:t') {
            const text = obj[key];
             if (Array.isArray(text)) {
                texts.push(...text);
             } else if (typeof text === 'string') {
                texts.push(text);
             } else if (typeof text === 'object' && text._) {
                 texts.push(text._);
             }
          } else {
            findText(obj[key]);
          }
        }
      } else if (Array.isArray(obj)) {
        obj.forEach(findText);
      }
    };
    findText(result);
    const fullText = texts.join(' ').trim();

    // Basic heuristic to identify questions/exercises
    const isQuestion = fullText.toLowerCase().startsWith('exercise') || 
                       fullText.toLowerCase().startsWith('problem') ||
                       fullText.toLowerCase().includes('?');

    if (isQuestion && fullText.length > 10) {
        // Try to find images for this slide
        let imageUrl: string | undefined;
        
        // Check relationships file for this slide
        const relsFileName = `ppt/slides/_rels/slide${slideNum}.xml.rels`;
        const relsEntry = zipEntries.find(e => e.entryName === relsFileName);
        
        if (relsEntry) {
            const relsXml = relsEntry.getData().toString('utf8');
            const relsResult = await parseStringPromise(relsXml);
            
            if (relsResult.Relationships && relsResult.Relationships.Relationship) {
                const rels = relsResult.Relationships.Relationship;
                // Find image relationship
                const imageRel = rels.find((r: any) => 
                    r.$.Type.includes('image')
                );
                
                if (imageRel) {
                    const target = imageRel.$.Target; // e.g., "../media/image1.png"
                    const imageName = path.basename(target);
                    const mediaEntryName = `ppt/media/${imageName}`;
                    const mediaEntry = zipEntries.find(e => e.entryName === mediaEntryName);
                    
                    if (mediaEntry) {
                        const ext = path.extname(imageName);
                        const savedImageName = `${courseName}_${path.basename(filePath, '.pptx')}_slide${slideNum}${ext}`.replace(/\s+/g, '_');
                        const savedImagePath = path.join(IMAGES_DIR, savedImageName);
                        
                        fs.writeFileSync(savedImagePath, mediaEntry.getData());
                        imageUrl = `/course-images/${savedImageName}`;
                    }
                }
            }
        }

        questions.push({
            course: courseName,
            sourceFile: path.basename(filePath),
            slideNumber: slideNum,
            content: fullText,
            imageUrl
        });
    }
  }
}

async function main() {
  if (!fs.existsSync(COURSES_DIR)) {
    console.error(`Courses directory not found at ${COURSES_DIR}`);
    return;
  }

  const courseDirs = fs.readdirSync(COURSES_DIR).filter(file => 
    fs.statSync(path.join(COURSES_DIR, file)).isDirectory()
  );

  const allQuestions: Question[] = [];

  for (const courseDir of courseDirs) {
    const fullCourseDir = path.join(COURSES_DIR, courseDir);
    const files = fs.readdirSync(fullCourseDir).filter(file => file.endsWith('.pptx'));
    
    for (const file of files) {
      await processPptx(path.join(fullCourseDir, file), courseDir, allQuestions);
    }
  }

  // Save to JSON
  const outputPath = path.join(process.cwd(), 'questions.json');
  fs.writeFileSync(outputPath, JSON.stringify(allQuestions, null, 2));
  console.log(`\nExtracted ${allQuestions.length} questions to ${outputPath}`);
}

main().catch(console.error);
