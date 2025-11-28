
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import path from 'path'

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function deleteLatestAttempt() {
  try {
    // 1. Get the latest attempt
    const { data: attempts, error: fetchError } = await supabase
      .from('exam_attempts')
      .select('id, started_at')
      .order('started_at', { ascending: false })
      .limit(1)

    if (fetchError) {
      throw fetchError
    }

    if (!attempts || attempts.length === 0) {
      console.log('No attempts found to delete.')
      return
    }

    const latestAttempt = attempts[0]
    console.log(`Found latest attempt: ${latestAttempt.id} started at ${latestAttempt.started_at}`)

    // 2. Delete it
    const { error: deleteError } = await supabase
      .from('exam_attempts')
      .delete()
      .eq('id', latestAttempt.id)

    if (deleteError) {
      throw deleteError
    }

    console.log(`Successfully deleted attempt ${latestAttempt.id}`)

  } catch (error) {
    console.error('Error deleting attempt:', error)
    process.exit(1)
  }
}

deleteLatestAttempt()
