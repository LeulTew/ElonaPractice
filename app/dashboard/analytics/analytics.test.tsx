import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AnalyticsPage from './page'
import { supabase } from '@/lib/supabase'
import React from 'react' // Added for React.ReactNode type

// Mock Supabase
vi.mock('@/lib/supabase', () => ({
  supabase: {
    from: vi.fn(() => ({
      select: vi.fn(() => ({
        eq: vi.fn(() => ({
          order: vi.fn()
        }))
      })),
      in: vi.fn()
    }))
  }
}))

// Mock Recharts
vi.mock('recharts', () => ({
  ResponsiveContainer: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  LineChart: () => <div>LineChart</div>,
  Line: () => null,
  XAxis: () => null,
  YAxis: () => null,
  CartesianGrid: () => null,
  Tooltip: () => null,
  BarChart: () => <div>BarChart</div>,
  Bar: () => null
}))

describe('Analytics Page', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders analytics with data', async () => {
    // Mock attempts data
    const mockAttempts = [
      { id: '1', score: 8, total_points: 10, time_spent_seconds: 600, started_at: '2023-01-01' },
      { id: '2', score: 9, total_points: 10, time_spent_seconds: 1200, started_at: '2023-01-02' }
    ]

    const mockOrder = vi.fn().mockResolvedValue({ data: mockAttempts, error: null })
    const mockEq = vi.fn().mockReturnValue({ order: mockOrder })
    const mockSelect = vi.fn().mockReturnValue({ eq: mockEq })
    
    // @ts-expect-error - mocking supabase client
    supabase.from.mockImplementation((table: string) => {
      if (table === 'exam_attempts') return { select: mockSelect }
      if (table === 'user_answers') return {
        select: vi.fn().mockReturnValue({
          eq: vi.fn().mockReturnValue({
            in: vi.fn().mockResolvedValue({ 
              data: Array(20).fill({ question_id: 'q1', user_answer: 'a' }).map((_, i) => ({ question_id: `q${i}`, user_answer: 'a' })), 
              error: null 
            })
          }),
          in: vi.fn().mockResolvedValue({ 
            data: Array(20).fill({ question_id: 'q1', user_answer: 'a' }).map((_, i) => ({ question_id: `q${i}`, user_answer: 'a' })), 
            error: null 
          })
        })
      }
      return { select: vi.fn() }
    })

    render(<AnalyticsPage />)

    expect(screen.getByText('Analytics')).toBeInTheDocument()
    
    await waitFor(() => {
      // KPIs
      expect(screen.getByText('Total Attempts')).toBeInTheDocument()
      expect(screen.getByText('2')).toBeInTheDocument() // Total attempts count
      
      expect(screen.getByText('Average Score')).toBeInTheDocument()
      expect(screen.getByText('85%')).toBeInTheDocument() // (80+90)/2
      
      expect(screen.getByText('Time Spent')).toBeInTheDocument()
      expect(screen.getByText('0h 30m')).toBeInTheDocument() // (600+1200)/60 = 30 mins

      expect(screen.getByText('Questions')).toBeInTheDocument()
      expect(screen.getByText('20')).toBeInTheDocument() // Mocked count
    })
  })

  it('handles empty data gracefully', async () => {
    const mockOrder = vi.fn().mockResolvedValue({ data: [], error: null })
    const mockEq = vi.fn().mockReturnValue({ order: mockOrder })
    const mockSelect = vi.fn().mockReturnValue({ eq: mockEq })
    const mockFrom = vi.fn((table) => {
      if (table === 'exam_attempts') return { select: mockSelect }
      return { select: vi.fn() }
    })

    // @ts-expect-error - mocking supabase client
    supabase.from.mockImplementation(mockFrom)

    render(<AnalyticsPage />)

    await waitFor(() => {
      expect(screen.getByText('No data available for practice mode')).toBeInTheDocument()
    })
  })

  it('switches modes', async () => {
    const user = userEvent.setup()
    const mockOrder = vi.fn().mockResolvedValue({ data: [], error: null })
    const mockEq = vi.fn().mockReturnValue({ order: mockOrder })
    const mockSelect = vi.fn().mockReturnValue({ eq: mockEq })
    const mockFrom = vi.fn((table) => {
      if (table === 'exam_attempts') return { select: mockSelect }
      return { select: vi.fn() }
    })

    // @ts-expect-error - mocking supabase client
    supabase.from.mockImplementation(mockFrom)

    render(<AnalyticsPage />)

    const examTab = screen.getByRole('tab', { name: 'Exam Mode' })
    await user.click(examTab)

    await waitFor(() => {
      expect(mockEq).toHaveBeenCalledWith('mode', 'EXAM')
    })
  })

  it('handles fetch error', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    const mockOrder = vi.fn().mockResolvedValue({ data: null, error: { message: 'Fetch error' } })
    const mockEq = vi.fn().mockReturnValue({ order: mockOrder })
    const mockSelect = vi.fn().mockReturnValue({ eq: mockEq })
    const mockFrom = vi.fn((table) => {
      if (table === 'exam_attempts') return { select: mockSelect }
      return { select: vi.fn() }
    })

    // @ts-expect-error - mocking supabase client
    supabase.from.mockImplementation(mockFrom)

    render(<AnalyticsPage />)

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith('Error fetching analytics:', expect.stringContaining('Fetch error'))
    })
    
    consoleSpy.mockRestore()
  })
})
