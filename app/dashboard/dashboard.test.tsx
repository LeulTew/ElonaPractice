/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import Dashboard from './page'
import { supabase } from '@/lib/supabase'

// Mock Supabase
vi.mock('@/lib/supabase', () => ({
  supabase: {
    from: vi.fn(() => ({
      select: vi.fn(() => ({
        single: vi.fn()
      }))
    }))
  }
}))

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  }
}))

// Mock Next/Link
vi.mock('next/link', () => ({
  default: ({ children, href }: any) => <a href={href}>{children}</a>
}))

describe('Dashboard Page', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders dashboard with stats and recent activity', async () => {
    // Mock successful attempts fetch
    const mockAttempts = [
      { id: '1', score: 8, total_points: 10, time_spent_seconds: 900, started_at: '2023-01-01', mode: 'PRACTICE', exam_id: 'exam-1' }, // 15 mins
      { id: '2', score: 9, total_points: 10, time_spent_seconds: 900, started_at: '2023-01-02', mode: 'EXAM', exam_id: 'exam-1' }  // 15 mins
    ]
    
    // Mock successful answers count fetch
    const mockAnswersCount = 50

    // Mock implementation for chained calls
    const mockIn = vi.fn().mockResolvedValue({ count: mockAnswersCount, error: null })
    const mockSelectAnswers = vi.fn().mockReturnValue({ in: mockIn })
    
    const mockOrder = vi.fn().mockResolvedValue({ data: mockAttempts, error: null })
    const mockSelectAttempts = vi.fn().mockReturnValue({ order: mockOrder })

    const mockFrom = vi.fn((table) => {
      if (table === 'exam_attempts') {
        return { select: mockSelectAttempts }
      }
      if (table === 'user_answers') {
        return { select: mockSelectAnswers }
      }
      return { select: vi.fn() }
    })
    
    // @ts-expect-error - mocking supabase client
    supabase.from.mockImplementation(mockFrom)

    render(<Dashboard />)

    expect(screen.getByText('Welcome back, Elona')).toBeInTheDocument()
    
    // Wait for stats to load
    // Avg score: (80% + 90%) / 2 = 85%
    // Total time: (900 + 900) / 60 = 30 mins
    // Questions answered: 50
    await waitFor(() => {
      expect(screen.getByText('85%')).toBeInTheDocument()
      expect(screen.getByText('50')).toBeInTheDocument()
      expect(screen.getByText('0h 30m')).toBeInTheDocument()
    })

    // Check recent activity
    expect(screen.getByText('Recent Activity')).toBeInTheDocument()
    expect(screen.getByText('Practice Mode')).toBeInTheDocument()
    expect(screen.getByText('Exam Mode')).toBeInTheDocument()
    expect(screen.getByText('80%')).toBeInTheDocument()
    expect(screen.getByText('90%')).toBeInTheDocument()
  })

  it('handles empty attempts', async () => {
    // Mock empty attempts
    const mockOrder = vi.fn().mockResolvedValue({ data: [], error: null })
    const mockSelectAttempts = vi.fn().mockReturnValue({ order: mockOrder })
    const mockFrom = vi.fn((table) => {
      if (table === 'exam_attempts') {
        return { select: mockSelectAttempts }
      }
      return { select: vi.fn() }
    })
    
    // @ts-expect-error - mocking supabase client
    supabase.from.mockImplementation(mockFrom)

    render(<Dashboard />)

    await waitFor(() => {
      expect(screen.getByText('0%')).toBeInTheDocument()
      const zeros = screen.getAllByText('0')
      expect(zeros.length).toBeGreaterThanOrEqual(1)
    })

    // Check empty state for recent activity
    expect(screen.getByText('No recent activity found')).toBeInTheDocument()
    expect(screen.getByText('Start your first exam')).toBeInTheDocument()
  })

  it('handles stats fetch error', async () => {
    // Mock error in attempts fetch
    const mockOrder = vi.fn().mockResolvedValue({ data: null, error: { message: 'Database error' } })
    const mockSelectAttempts = vi.fn().mockReturnValue({ order: mockOrder })
    const mockFrom = vi.fn((table) => {
      if (table === 'exam_attempts') {
        return { select: mockSelectAttempts }
      }
      return { select: vi.fn() }
    })
    
    // @ts-expect-error - mocking supabase client
    supabase.from.mockImplementation(mockFrom)

    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    render(<Dashboard />)

    // Should still render with default stats (0 values)
    await waitFor(() => {
      expect(screen.getByText('0%')).toBeInTheDocument()
      const zeros = screen.getAllByText('0')
      expect(zeros.length).toBeGreaterThanOrEqual(1)
    })

    expect(consoleSpy).toHaveBeenCalledWith('Failed to fetch exam attempts:', expect.any(Object))
    consoleSpy.mockRestore()
  })

  it('handles exception during stats fetch', async () => {
    // Mock exception during fetch
    const mockFrom = vi.fn().mockImplementation(() => {
      throw new Error('Network error')
    })
    
    // @ts-expect-error - mocking supabase client
    supabase.from.mockImplementation(mockFrom)

    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    render(<Dashboard />)

    // Should render with default stats
    await waitFor(() => {
      expect(screen.getByText('Welcome back, Elona')).toBeInTheDocument()
    })

    expect(consoleSpy).toHaveBeenCalledWith('Failed to fetch dashboard stats:', expect.any(Error))
    consoleSpy.mockRestore()
  })
})
