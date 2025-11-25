import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import { EXAM_CONTENT } from './data/exam-content';
import { QuestionData } from './data/exams/types';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Define priority for sorting question types
const TYPE_PRIORITY: Record<string, number> = {
  'MCQ': 1,
  'MULTI_SELECT': 2,
  'TRUE_FALSE': 3,
  'FILL_BLANK': 4,
  'MATCHING': 5,
  'ORDER_SEQUENCE': 6,
  'SHORT_ANSWER': 7,
  'CALCULATION': 8,
  'CASE_STUDY': 9,
  'IDENTIFY_ERROR': 10
};

interface DbQuestion {
  id: string;
  exam_id: string;
  content: string;
  question_type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any; // jsonb
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  correct_answer: any; // jsonb
  explanation?: string;
  points: number;
  difficulty: string;
  order_index: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  metadata: any; // jsonb
}

async function main() {
  console.log('Generating CNP Question Bank from Manual Content...');

  const allQuestions: DbQuestion[] = [];

  for (const [examId, questions] of Object.entries(EXAM_CONTENT) as [string, QuestionData[]][]) {
    console.log(`Processing ${examId} with ${questions.length} questions...`);
    
    // Sort questions by type priority
    const sortedQuestions = [...questions].sort((a, b) => {
      const priorityA = TYPE_PRIORITY[a.type] || 99;
      const priorityB = TYPE_PRIORITY[b.type] || 99;
      return priorityA - priorityB;
    });

    sortedQuestions.forEach((q, index) => {
      const dbQuestion = transformQuestion(q, examId, index + 1); 
      allQuestions.push(dbQuestion);
    });
  }

  // Generate SQL seed file
  const sqlContent = generateSQL(allQuestions);
  fs.writeFileSync('supabase/seed_questions.sql', sqlContent);
  console.log('SQL seed file written to supabase/seed_questions.sql');

  // Insert into Supabase
  console.log('Inserting questions into Supabase...');
  
  // Delete existing questions for these exams first to avoid duplicates/mess
  const examIds = Object.keys(EXAM_CONTENT);
  const { error: deleteError } = await supabase
    .from('questions')
    .delete()
    .in('exam_id', examIds);

  if (deleteError) {
    console.error('Error clearing old questions:', deleteError);
  }

  // Batch insert
  const BATCH_SIZE = 50;
  for (let i = 0; i < allQuestions.length; i += BATCH_SIZE) {
    const batch = allQuestions.slice(i, i + BATCH_SIZE);
    const { error } = await supabase.from('questions').insert(batch);
    if (error) {
      console.error(`Error inserting batch ${i}:`, error);
    } else {
      console.log(`Inserted batch ${i} - ${Math.min(i + BATCH_SIZE, allQuestions.length)}`);
    }
  }

  console.log('Done!');
}

function transformQuestion(q: QuestionData, examId: string, index: number): DbQuestion {
  const id = uuidv4();
  
  let dbType = q.type;
  // Map custom types to DB types
  if (!['MCQ', 'MULTI_SELECT', 'TRUE_FALSE', 'FILL_BLANK', 'SHORT_ANSWER', 'MATCHING'].includes(q.type)) {
    if (q.type === 'ORDER_SEQUENCE') dbType = 'MATCHING'; // Frontend handles ordering UI
    else if (q.type === 'CALCULATION') dbType = 'SHORT_ANSWER';
    else if (q.type === 'CASE_STUDY') dbType = 'SHORT_ANSWER';
    else if (q.type === 'IDENTIFY_ERROR') dbType = 'SHORT_ANSWER';
    else dbType = 'SHORT_ANSWER';
  }

  // Ensure options are JSON compatible
  let options = q.options;
  if (q.type === 'TRUE_FALSE' && !options) {
    options = ["True", "False"];
  }

  return {
    id,
    exam_id: examId,
    content: q.content,
    question_type: dbType,
    options: options ? options : null, // Supabase expects jsonb or null
    correct_answer: q.correctAnswer,
    explanation: q.explanation,
    points: ['MULTI_SELECT', 'MATCHING', 'ORDER_SEQUENCE', 'CASE_STUDY'].includes(q.type) ? 2 : 1,
    difficulty: ['EASY', 'MEDIUM', 'HARD'][index % 3],
    order_index: index,
    metadata: {
      real_type: q.type,
      image_url: q.image || null
    }
  };
}

function generateSQL(questions: DbQuestion[]) {
  let sql = `
-- Seed questions
TRUNCATE TABLE questions CASCADE;
`;

  questions.forEach(q => {
    const options = q.options ? `'${JSON.stringify(q.options)}'::jsonb` : 'NULL';
    const correctAnswer = `'${JSON.stringify(q.correct_answer)}'::jsonb`;
    const metadata = `'${JSON.stringify(q.metadata)}'::jsonb`;
    const explanation = q.explanation ? `'${q.explanation.replace(/'/g, "''")}'` : 'NULL';
    const content = `'${q.content.replace(/'/g, "''")}'`;

    sql += `
INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('${q.id}', '${q.exam_id}', ${content}, '${q.question_type}', ${options}, ${correctAnswer}, ${explanation}, ${q.points}, '${q.difficulty}', ${q.order_index}, ${metadata});
`;
  });

  return sql;
}

main().catch(console.error);
