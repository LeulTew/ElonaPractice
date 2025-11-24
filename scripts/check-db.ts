import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

async function checkData() {
  console.log('🔍 Checking database...\n')

  // Check courses
  const { data: courses, error: coursesError } = await supabase
    .from('courses')
    .select('*')
  
  console.log('📚 Courses:', courses?.length || 0)
  if (coursesError) console.log('   Error:', coursesError.message)
  else console.log('   ', courses)

  // Check exams
  const { data: exams, error: examsError } = await supabase
    .from('exams')
    .select('*')
  
  console.log('\n📝 Exams:', exams?.length || 0)
  if (examsError) console.log('   Error:', examsError.message)
  else console.log('   ', exams)

  // Check questions
  const { data: questions, error: questionsError } = await supabase
    .from('questions')
    .select('count')
    .single()
  
  console.log('\n❓ Questions:', questions || 0)
  if (questionsError) console.log('   Error:', questionsError.message)

  // Test the exact query the app uses
  console.log('\n🧪 Testing app query...')
  const { data: testExams, error: testError } = await supabase
    .from('exams')
    .select('*')
    .eq('course_id', 'chemistry-of-natural-product-cnp-')
    .order('chapter_number', { ascending: true, nullsFirst: false })

  console.log('   Results:', testExams?.length || 0)
  if (testError) console.log('   Error:', testError.message)
  else console.log('   ', testExams)
}

checkData()
