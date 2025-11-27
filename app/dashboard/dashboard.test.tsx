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

  it('renders dashboard with stats', async () => {
    // Mock successful stats fetch
    const mockStats = {
      total_attempts: 10,
      avg_score: 85,
      total_time_minutes: 120,
      questions_answered: 50
    }

    const mockSingle = vi.fn().mockResolvedValue({ data: mockStats, error: null })
    const mockSelect = vi.fn().mockReturnValue({ single: mockSingle })
    const mockFrom = vi.fn().mockReturnValue({ select: mockSelect })
    
    // @ts-expect-error - mocking supabase client
    supabase.from.mockImplementation(mockFrom)

    render(<Dashboard />)

    expect(screen.getByText('Welcome back, Elona')).toBeInTheDocument()
    
    // Wait for stats to load
    await waitFor(() => {
      expect(screen.getByText('85%')).toBeInTheDocument()
      expect(screen.getByText('50')).toBeInTheDocument()
    })
  })

  it('handles stats fetch error', async () => {
    // Mock error in stats fetch
    const mockSingle = vi.fn().mockResolvedValue({ data: null, error: { message: 'Database error' } })
    const mockSelect = vi.fn().mockReturnValue({ single: mockSingle })
    const mockFrom = vi.fn().mockReturnValue({ select: mockSelect })
    
    // @ts-expect-error - mocking supabase client
    supabase.from.mockImplementation(mockFrom)

    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    render(<Dashboard />)

    // Should still render with default stats (0 values)
    await waitFor(() => {
      expect(screen.getByText('Welcome back, Elona')).toBeInTheDocument()
      expect(screen.getByText('0%')).toBeInTheDocument()
    })

    expect(consoleSpy).toHaveBeenCalledWith('Failed to fetch dashboard stats:', expect.any(Object))
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
