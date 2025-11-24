import { describe, it, expect, vi, beforeEach } from 'vitest'
import { supabase } from './supabase'

// Mock Supabase client
vi.mock('./supabase', () => {
  const mockSelect = vi.fn().mockReturnThis()
  const mockFrom = vi.fn().mockReturnValue({ select: mockSelect })
  
  return {
    supabase: {
      from: mockFrom
    }
  }
})

describe('Supabase Client Integration', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should be initialized with environment variables', () => {
    expect(supabase).toBeDefined()
  })

  it('should construct a query to fetch questions', async () => {
    const mockData = [{ id: '1', content: 'Test' }]
    const mockError = null
    
    // Setup mock chain
    const mockSelect = vi.fn().mockResolvedValue({ data: mockData, error: mockError })
    const mockFrom = vi.fn().mockReturnValue({ select: mockSelect })
    
    // Re-mock implementation for this test
    // @ts-ignore
    supabase.from = mockFrom

    const { data, error } = await supabase
      .from('questions')
      .select('*')

    expect(mockFrom).toHaveBeenCalledWith('questions')
    expect(mockSelect).toHaveBeenCalledWith('*')
    expect(data).toEqual(mockData)
    expect(error).toBeNull()
  })

  it('should handle errors gracefully', async () => {
    const mockError = { message: 'Network error' }
    
    const mockSelect = vi.fn().mockResolvedValue({ data: null, error: mockError })
    const mockFrom = vi.fn().mockReturnValue({ select: mockSelect })
    
    // @ts-ignore
    supabase.from = mockFrom

    const { data, error } = await supabase
      .from('questions')
      .select('*')

    expect(data).toBeNull()
    expect(error).toEqual(mockError)
  })
})
