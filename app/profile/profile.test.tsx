
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import ProfilePage from './page'
import { supabase } from '@/lib/supabase'

// Mock Supabase
vi.mock('@/lib/supabase', () => ({
  supabase: {
    from: vi.fn(() => ({
      select: vi.fn(() => ({
        order: vi.fn()
      }))
    }))
  }
}))

describe('Profile Page', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders profile with stats', async () => {
    const mockAttempts = [
      { score: 80, total_questions: 10 },
      { score: 90, total_questions: 10 }
    ]

    const mockOrder = vi.fn().mockResolvedValue({ data: mockAttempts, error: null })
    const mockSelect = vi.fn().mockReturnValue({ order: mockOrder })
    const mockFrom = vi.fn().mockReturnValue({ select: mockSelect })

    // @ts-expect-error - mocking supabase client
    supabase.from.mockImplementation(mockFrom)

    render(<ProfilePage />)

    expect(screen.getByText('Profile')).toBeInTheDocument()
    expect(screen.getByText('Elona Student')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText('Total Attempts')).toBeInTheDocument()
      expect(screen.getByText('2')).toBeInTheDocument()
      
      expect(screen.getByText('Best Score')).toBeInTheDocument()
      expect(screen.getByText('90%')).toBeInTheDocument()
    })
  })

  it('does not render recent activity section', async () => {
    const mockOrder = vi.fn().mockResolvedValue({ data: [], error: null })
    const mockSelect = vi.fn().mockReturnValue({ order: mockOrder })
    const mockFrom = vi.fn().mockReturnValue({ select: mockSelect })

    // @ts-expect-error - mocking supabase client
    supabase.from.mockImplementation(mockFrom)

    render(<ProfilePage />)

    await waitFor(() => {
      expect(screen.queryByText('Recent Activity')).not.toBeInTheDocument()
    })
  })
})
