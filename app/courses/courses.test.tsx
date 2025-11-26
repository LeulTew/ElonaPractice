import type { ReactNode } from 'react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import CoursesPage from './page'

const mocks = vi.hoisted(() => ({
  courses: [
    {
      id: 'c1',
      title: 'Chemistry 101',
      code: 'CHEM101',
      description: 'Intro to Chemistry'
    }
  ]
}))

const supabaseMocks = vi.hoisted(() => {
  const selectMock = vi.fn()
  return {
    selectMock,
    fromMock: vi.fn(() => ({ select: selectMock }))
  }
})

vi.mock('@/lib/supabase', () => ({
  supabase: {
    from: supabaseMocks.fromMock
  }
}))

vi.mock('@/components/exam-selection-modal', () => ({
  ExamSelectionModal: ({ onClose }: { onClose: () => void }) => (
    <div>
      <p>Mock Exam Modal</p>
      <button onClick={onClose}>Close Modal</button>
    </div>
  )
}))

type MotionDivProps = { children: ReactNode } & Record<string, unknown>

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...rest }: MotionDivProps) => (
      <div {...rest}>{children}</div>
    ),
  },
  AnimatePresence: ({ children }: { children: ReactNode }) => <>{children}</>
}))

describe('Courses Page', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    supabaseMocks.selectMock.mockReset()
    supabaseMocks.selectMock.mockResolvedValue({ data: mocks.courses, error: null })
  })

  it('renders courses and opens the mocked modal', async () => {
    render(<CoursesPage />)

    expect(screen.getByText('Loading courses...')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText('Chemistry 101')).toBeInTheDocument()
    })

    fireEvent.click(screen.getByText('Chemistry 101'))

    await waitFor(() => {
      expect(screen.getByText('Mock Exam Modal')).toBeInTheDocument()
    })
  })

  it('logs an error when fetching courses fails', async () => {
    const error = new Error('boom')
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    supabaseMocks.selectMock.mockResolvedValueOnce({ data: null, error })

    render(<CoursesPage />)

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith('Error fetching courses:', error)
    })

    consoleSpy.mockRestore()
  })

  it('closes the modal when the child triggers onClose', async () => {
    render(<CoursesPage />)

    await waitFor(() => {
      expect(screen.getByText('Chemistry 101')).toBeInTheDocument()
    })

    fireEvent.click(screen.getByText('Chemistry 101'))
    await screen.findByText('Mock Exam Modal')

    fireEvent.click(screen.getByText('Close Modal'))

    await waitFor(() => {
      expect(screen.queryByText('Mock Exam Modal')).not.toBeInTheDocument()
    })
  })
})
