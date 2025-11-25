import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function main() {
  console.log('Seeding Database with Course and Exams...');

  // 0. Cleanup - Remove all existing CNP courses to prevent duplicates
  const { error: deleteError } = await supabase
    .from('courses')
    .delete()
    .ilike('title', '%Chemistry of Natural Product%'); // Broad match to catch duplicates

  if (deleteError) {
    console.error('Error cleaning up old courses:', deleteError);
  } else {
    console.log('Cleaned up old courses.');
  }

  // 1. Course
  const course = {
    id: 'chemistry-of-natural-product-cnp-v2', // New ID to ensure freshness
    title: 'Chemistry of Natural Product (CNP)',
    code: 'CNP-101',
    description: 'Chemistry of Natural Product course',
    settings: { theme: 'chemistry' }
  };

  const { error: courseError } = await supabase
    .from('courses')
    .upsert(course);

  if (courseError) {
    console.error('Error seeding course:', courseError);
    return;
  }
  console.log('Course seeded.');

  // 2. Exams
  const exams = [
    {
      id: 'exam-cnp-ch1',
      course_id: course.id,
      title: 'Chapter 1: Stereochemistry',
      description: 'Focus on chirality, enantiomers, diastereomers, and optical activity.',
      chapter_number: 1,
      duration_minutes: 45,
      passing_score: 70,
      difficulty: 'MEDIUM',
      status: 'PUBLISHED'
    },
    {
      id: 'exam-cnp-ch2',
      course_id: course.id,
      title: 'Chapter 2: Carbohydrates',
      description: 'Monosaccharides, disaccharides, glycosidic bonds, and reactions.',
      chapter_number: 2,
      duration_minutes: 45,
      passing_score: 70,
      difficulty: 'MEDIUM',
      status: 'PUBLISHED'
    },
    {
      id: 'exam-cnp-ch3',
      course_id: course.id,
      title: 'Chapter 3: Chirality and Drug Approvals',
      description: 'Regulatory aspects, enantiomeric purity, and pharmacological differences.',
      chapter_number: 3,
      duration_minutes: 45,
      passing_score: 70,
      difficulty: 'HARD',
      status: 'PUBLISHED'
    },
    {
      id: 'exam-cnp-final',
      course_id: course.id,
      title: 'Final Exam: Comprehensive',
      description: 'Comprehensive assessment covering all chapters.',
      chapter_number: null,
      duration_minutes: 90,
      passing_score: 75,
      difficulty: 'HARD',
      status: 'PUBLISHED'
    }
  ];

  for (const exam of exams) {
    const { error } = await supabase.from('exams').upsert(exam);
    if (error) {
      console.error(`Error seeding exam ${exam.id}:`, error);
    } else {
      console.log(`Exam ${exam.id} seeded.`);
    }
  }

  console.log('Database seeding complete!');
}

main().catch(console.error);
