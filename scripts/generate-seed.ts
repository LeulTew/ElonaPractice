import fs from 'fs';
import path from 'path';
import AdmZip from 'adm-zip';
import { parseStringPromise } from 'xml2js';

const COURSES_DIR = path.join(process.cwd(), 'Courses');
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'course-images');
const OUTPUT_FILE = path.join(process.cwd(), 'supabase', 'seed.sql');

// Ensure directories exist
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

interface QuestionData {
  examId: string;
  content: string;
  imageUrl?: string;
  questionType: 'MCQ' | 'FILL_BLANK' | 'SHORT_ANSWER';
  options: string[];
  correctAnswer: string;
  hint?: string;
  points: number;
  orderIndex: number;
}

interface ExamData {
  id: string;
  courseId: string;
  title: string;
  description: string;
  chapterNumber: number | null;
  durationMinutes: number;
  passingScore: number;
}

async function processPptx(filePath: string, courseName: string, chapterNumber: number): Promise<QuestionData[]> {
  console.log(`Processing: ${path.basename(filePath)} (Chapter ${chapterNumber})`);
  const zip = new AdmZip(filePath);
  const zipEntries = zip.getEntries();
  const questions: QuestionData[] = [];

  const getSlideNumber = (filename: string) => {
    const match = filename.match(/slide(\d+)\.xml/);
    return match ? parseInt(match[1]) : 0;
  };

  const slideEntries = zipEntries.filter(entry => 
    entry.entryName.startsWith('ppt/slides/slide') && entry.entryName.endsWith('.xml')
  );

  slideEntries.sort((a, b) => getSlideNumber(a.entryName) - getSlideNumber(b.entryName));

  for (const slide of slideEntries) {
    const slideNum = getSlideNumber(slide.entryName);
    const slideXml = slide.getData().toString('utf8');
    const result = await parseStringPromise(slideXml);
    
    const texts: string[] = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

    // Detect question type and extract data
    const isQuestion = fullText.toLowerCase().startsWith('exercise') || 
                       fullText.toLowerCase().startsWith('problem') ||
                       fullText.toLowerCase().includes('?') ||
                       fullText.toLowerCase().includes('which') ||
                       fullText.toLowerCase().includes('what');

    if (isQuestion && fullText.length > 10) {
      // Extract image if exists
      let imageUrl: string | undefined;
      const relsFileName = `ppt/slides/_rels/slide${slideNum}.xml.rels`;
      const relsEntry = zipEntries.find(e => e.entryName === relsFileName);
      
      if (relsEntry) {
        const relsXml = relsEntry.getData().toString('utf8');
        const relsResult = await parseStringPromise(relsXml);
        
        if (relsResult.Relationships && relsResult.Relationships.Relationship) {
          const rels = relsResult.Relationships.Relationship;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const imageRel = rels.find((r: any) => r.$.Type.includes('image'));
          
          if (imageRel) {
            const target = imageRel.$.Target;
            const imageName = path.basename(target);
            const mediaEntryName = `ppt/media/${imageName}`;
            const mediaEntry = zipEntries.find(e => e.entryName === mediaEntryName);
            
            if (mediaEntry) {
              const ext = path.extname(imageName);
              const savedImageName = `${courseName}_ch${chapterNumber}_slide${slideNum}${ext}`.replace(/\s+/g, '_');
              const savedImagePath = path.join(IMAGES_DIR, savedImageName);
              
              fs.writeFileSync(savedImagePath, mediaEntry.getData());
              imageUrl = `/course-images/${savedImageName}`;
            }
          }
        }
      }

      // Detect question type
      let questionType: 'MCQ' | 'FILL_BLANK' | 'SHORT_ANSWER' = 'SHORT_ANSWER';
      let options: string[] = [];
      let correctAnswer = '';

      // Check for MCQ (A. B. C. D. pattern)
      const mcqPattern = /[A-D]\.\s*([^\n]+)/g;
      const mcqMatches = Array.from(fullText.matchAll(mcqPattern));
      
      if (mcqMatches.length >= 2) {
        questionType = 'MCQ';
        options = mcqMatches.map(m => m[1].trim());
        correctAnswer = options[0]; // Default to first option
      }
      // Check for fill-in-blank (_____ pattern)
      else if (fullText.includes('_____') || fullText.includes('___')) {
        questionType = 'FILL_BLANK';
        correctAnswer = 'sample answer'; // Will need manual review
      }

      questions.push({
        examId: '', // Will be set later
        content: fullText,
        imageUrl,
        questionType,
        options,
        correctAnswer,
        hint: undefined,
        points: 1,
        orderIndex: questions.length
      });
    }
  }

  return questions;
}

async function main() {
  console.log('🚀 Generating seed data from PPTX files...\n');

  if (!fs.existsSync(COURSES_DIR)) {
    console.error(`Courses directory not found at ${COURSES_DIR}`);
    return;
  }

  const courseDirs = fs.readdirSync(COURSES_DIR).filter(file => 
    fs.statSync(path.join(COURSES_DIR, file)).isDirectory()
  );

  let sqlStatements: string[] = [];
  
  // Start transaction
  sqlStatements.push('BEGIN;');
  sqlStatements.push('');

  for (const courseDir of courseDirs) {
    const fullCourseDir = path.join(COURSES_DIR, courseDir);
    const files = fs.readdirSync(fullCourseDir).filter(file => file.endsWith('.pptx'));
    
    console.log(`📚 Processing course: ${courseDir}`);
    console.log(`   Found ${files.length} PPTX files\n`);

    // Generate course ID
    const courseId = courseDir.toLowerCase().replace(/[^a-z0-9]/g, '-');
    
    // Insert course
    sqlStatements.push(`-- Course: ${courseDir}`);
    sqlStatements.push(`INSERT INTO courses (id, title, code, description) VALUES`);
    sqlStatements.push(`  ('${courseId}', '${courseDir}', 'CNP-101', 'Chemistry of Natural Product course')`);
    sqlStatements.push(`  ON CONFLICT (id) DO NOTHING;`);
    sqlStatements.push('');

    const allQuestions: QuestionData[] = [];
    const exams: ExamData[] = [];

    // Process each PPTX file as a chapter
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const chapterNumber = i + 1;
      const examId = `${courseId}-ch${chapterNumber}`;
      
      const questions = await processPptx(
        path.join(fullCourseDir, file),
        courseDir,
        chapterNumber
      );

      // Set exam ID for questions
      questions.forEach(q => q.examId = examId);
      allQuestions.push(...questions);

      // Create chapter exam
      exams.push({
        id: examId,
        courseId,
        title: `Chapter ${chapterNumber} - ${file.replace('.pptx', '')}`,
        description: `Practice exam for chapter ${chapterNumber}`,
        chapterNumber,
        durationMinutes: 30,
        passingScore: 70
      });

      console.log(`   ✓ Chapter ${chapterNumber}: ${questions.length} questions`);
    }

    // Create comprehensive exam
    const comprehensiveExamId = `${courseId}-comprehensive`;
    exams.push({
      id: comprehensiveExamId,
      courseId,
      title: 'Comprehensive Exam - All Chapters',
      description: 'Final exam covering all chapters',
      chapterNumber: null,
      durationMinutes: 90,
      passingScore: 75
    });

    // Sample questions from all chapters for comprehensive exam
    const sampleSize = Math.min(20, Math.floor(allQuestions.length / 2));
    const comprehensiveQuestions = allQuestions
      .sort(() => Math.random() - 0.5)
      .slice(0, sampleSize)
      .map((q, idx) => ({
        ...q,
        examId: comprehensiveExamId,
        orderIndex: idx
      }));

    allQuestions.push(...comprehensiveQuestions);

    console.log(`   ✓ Comprehensive: ${comprehensiveQuestions.length} questions`);
    console.log(`   📊 Total: ${exams.length} exams, ${allQuestions.length} questions\n`);

    // Insert exams
    for (const exam of exams) {
      sqlStatements.push(`-- Exam: ${exam.title}`);
      sqlStatements.push(`INSERT INTO exams (id, course_id, title, description, chapter_number, duration_minutes, passing_score) VALUES`);
      sqlStatements.push(`  ('${exam.id}', '${exam.courseId}', '${exam.title.replace(/'/g, "''")}', '${exam.description}', ${exam.chapterNumber || 'NULL'}, ${exam.durationMinutes}, ${exam.passingScore})`);
      sqlStatements.push(`  ON CONFLICT (id) DO NOTHING;`);
      sqlStatements.push('');
    }

    // Insert questions
    for (const q of allQuestions) {
      const optionsJson = JSON.stringify(q.options).replace(/'/g, "''");
      sqlStatements.push(`INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES`);
      sqlStatements.push(`  ('${q.examId}', '${q.content.replace(/'/g, "''")}', ${q.imageUrl ? `'${q.imageUrl}'` : 'NULL'}, '${q.questionType}', '${optionsJson}'::jsonb, '${q.correctAnswer.replace(/'/g, "''")}', ${q.hint ? `'${q.hint}'` : 'NULL'}, ${q.points}, ${q.orderIndex});`);
    }
    sqlStatements.push('');
  }

  // Commit transaction
  sqlStatements.push('COMMIT;');

  // Write to file
  fs.writeFileSync(OUTPUT_FILE, sqlStatements.join('\n'));
  console.log(`✅ Seed data generated: ${OUTPUT_FILE}`);
  console.log(`\n📝 Next steps:`);
  console.log(`   1. Review ${OUTPUT_FILE}`);
  console.log(`   2. Run the SQL in your Supabase SQL Editor`);
  console.log(`   3. Refresh the app to see real data!`);
}

main().catch(console.error);
