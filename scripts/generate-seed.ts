import fs from 'fs';
import path from 'path';

const QUESTIONS_PATH = path.join(process.cwd(), 'questions.json');
const OUTPUT_PATH = path.join(process.cwd(), 'supabase/seed.sql');

interface Question {
  course: string;
  sourceFile: string;
  slideNumber: number;
  content: string;
  imageUrl?: string;
}

function escapeSql(str: string): string {
  return str.replace(/'/g, "''");
}

function generateSeed() {
  const questions: Question[] = JSON.parse(fs.readFileSync(QUESTIONS_PATH, 'utf-8'));
  
  // Group by course
  const courses = new Set(questions.map(q => q.course));
  
  let sql = `-- Seed data generated from questions.json\n\n`;
  
  // Clear existing data (optional, be careful in prod)
  sql += `TRUNCATE TABLE questions, courses CASCADE;\n\n`;

  const courseIds: Record<string, string> = {};

  // Insert Courses
  courses.forEach(courseName => {
    const id = 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11'; // Hardcoded for simplicity in seed
    courseIds[courseName] = id;
    sql += `INSERT INTO courses (id, title, code) VALUES ('${id}', '${escapeSql(courseName)}', 'CNP-101');\n`;
  });

  sql += `\n`;

  // Insert Questions
  questions.forEach(q => {
    const courseId = courseIds[q.course];
    const content = escapeSql(q.content);
    const imageUrl = q.imageUrl ? `'${q.imageUrl}'` : 'NULL';
    
    sql += `INSERT INTO questions (course_id, content, image_url, question_type, created_at) VALUES ('${courseId}', '${content}', ${imageUrl}, 'OPEN', now());\n`;
  });

  fs.writeFileSync(OUTPUT_PATH, sql);
  console.log(`Generated seed SQL at ${OUTPUT_PATH}`);
}

generateSeed();
