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

    expect(screen.getByText('Welcome back, Student')).toBeInTheDocument()
    
    // Wait for stats to load
    await waitFor(() => {
      expect(screen.getByText('85%')).toBeInTheDocument()
      expect(screen.getByText('50')).toBeInTheDocument()
    })
  })

  it('handles empty stats', async () => {
    // Mock empty stats (first time user)
    const mockSingle = vi.fn().mockResolvedValue({ data: null, error: null })
    const mockSelect = vi.fn().mockReturnValue({ single: mockSingle })
    const mockFrom = vi.fn().mockReturnValue({ select: mockSelect })
    
    // @ts-expect-error - mocking supabase client
    supabase.from.mockImplementation(mockFrom)

    render(<Dashboard />)

    await waitFor(() => {
      expect(screen.getByText('0%')).toBeInTheDocument()
    })
  })
})
