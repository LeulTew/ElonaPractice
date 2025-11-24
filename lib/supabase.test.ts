import { describe, it, expect } from 'vitest'
import { supabase } from './supabase'

describe('Supabase Client Integration (Real)', () => {
  it('should be initialized with environment variables', () => {
    expect(supabase).toBeDefined()
    expect(process.env.NEXT_PUBLIC_SUPABASE_URL).toBeDefined()
    expect(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY).toBeDefined()
  })

  // Note: The following tests require the database tables to be created first
  // Run the schema.sql file in Supabase to create the tables before running these tests
  it.skip('should fetch questions from the real database', async () => {
    const { data, error } = await supabase
      .from('questions')
      .select('*')
      .limit(1)

    expect(error).toBeNull()
    expect(data).toBeDefined()
    expect(Array.isArray(data)).toBe(true)
    
    if (data && data.length > 0) {
      const question = data[0]
      expect(question).toHaveProperty('id')
      expect(question).toHaveProperty('content')
      expect(question).toHaveProperty('course_id')
    }
  })

  it.skip('should fetch courses from the real database', async () => {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .limit(1)

    expect(error).toBeNull()
    expect(data).toBeDefined()
    if (data && data.length > 0) {
      expect(data[0]).toHaveProperty('title')
    }
  })
})
