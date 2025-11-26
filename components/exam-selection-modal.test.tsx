/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ExamSelectionModal } from './exam-selection-modal'
import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock next/navigation
const mockPush = vi.fn()
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}))

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

// Mock lucide-react icons
vi.mock('lucide-react', () => ({
  X: () => <svg data-testid="x-icon" />,
  Zap: () => <svg data-testid="zap-icon" />,
  Clock: () => <svg data-testid="clock-icon" />,
  Sparkles: () => <svg data-testid="sparkles-icon" />,
  Timer: () => <svg data-testid="timer-icon" />,
  ChevronRight: () => <svg data-testid="chevron-icon" />,
  BookOpen: () => <svg data-testid="book-icon" />,
  ArrowRight: () => <svg data-testid="arrow-right-icon" />,
}))

// Mock supabase
const mockFrom = vi.fn()
vi.mock('@/lib/supabase', () => ({
  supabase: {
    from: () => mockFrom(),
  },
}))

describe('ExamSelectionModal', () => {
  const mockCourse = {
    id: 'course-1',
    title: 'Test Course',
    code: 'TEST101',
  }

  const mockExams = [
    {
      id: 'exam-1',
      title: 'Exam 1',
      description: 'Test exam 1',
      created_at: '2024-01-01',
      duration_minutes: 45,
      passing_score: 70,
    },
    {
      id: 'exam-2',
      title: 'Exam 2',
      description: null,
      created_at: '2024-01-02',
      duration_minutes: 30,
      passing_score: 60,
    },
  ]

  beforeEach(() => {
    vi.clearAllMocks()
    mockFrom.mockReturnValue({
      select: vi.fn().mockReturnThis(),
      eq: vi.fn().mockReturnThis(),
      order: vi.fn().mockResolvedValue({ data: mockExams, error: null }),
    })
  })

  it('renders when open', async () => {
    render(
      <ExamSelectionModal
        isOpen={true}
        onClose={vi.fn()}
        course={mockCourse}
      />
    )

    await waitFor(() => {
      expect(screen.getByText('Test Course')).toBeInTheDocument()
      expect(screen.getByText('TEST101')).toBeInTheDocument()
    })
  })

  it('does not render when closed', () => {
    render(
      <ExamSelectionModal
        isOpen={false}
        onClose={vi.fn()}
        course={mockCourse}
      />
    )

    expect(screen.queryByText('Test Course')).not.toBeInTheDocument()
  })

  it('toggles between PRACTICE and EXAM modes', async () => {
    render(
      <ExamSelectionModal
        isOpen={true}
        onClose={vi.fn()}
        course={mockCourse}
      />
    )

    await waitFor(() => {
      expect(screen.getByText('Practice Mode')).toBeInTheDocument()
    })

    // Click EXAM mode button
    const examModeButton = screen.getByText('Exam Mode')
    fireEvent.click(examModeButton)

    await waitFor(() => {
      expect(screen.getByText(/Timed exam simulation/i)).toBeInTheDocument()
    })

    // Click PRACTICE mode button
    const practiceModeButton = screen.getByText('Practice Mode')
    fireEvent.click(practiceModeButton)

    await waitFor(() => {
      expect(screen.getByText(/Practice with hints/i)).toBeInTheDocument()
    })
  })

  it('starts exam with selected mode', async () => {
    render(
      <ExamSelectionModal
        isOpen={true}
        onClose={vi.fn()}
        course={mockCourse}
      />
    )

    // Wait for exams to load
    await waitFor(() => {
      expect(screen.getByText('Exam 1')).toBeInTheDocument()
    })

    // Click on first exam
    const exam1Card = screen.getByText('Exam 1')
    fireEvent.click(exam1Card)

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/exam/exam-1?mode=PRACTICE')
    })
  })

  it('navigates with EXAM mode when toggled', async () => {
    render(
      <ExamSelectionModal
        isOpen={true}
        onClose={vi.fn()}
        course={mockCourse}
      />
    )

    // Wait for exams to load
    await waitFor(() => {
      expect(screen.getByText('Exam 1')).toBeInTheDocument()
    })

    // Toggle to EXAM mode
    const examModeButton = screen.getByText('Exam Mode')
    fireEvent.click(examModeButton)

    // Click on second exam
    const exam2Card = screen.getByText('Exam 2')
    fireEvent.click(exam2Card)

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/exam/exam-2?mode=EXAM')
    })
  })

  it('shows loading state', () => {
    mockFrom.mockReturnValue({
      select: vi.fn().mockReturnThis(),
      eq: vi.fn().mockReturnThis(),
      order: vi.fn().mockImplementation(() => new Promise(() => {})), // Never resolves
    })

    render(
      <ExamSelectionModal
        isOpen={true}
        onClose={vi.fn()}
        course={mockCourse}
      />
    )

    expect(screen.getByText('Loading exams...')).toBeInTheDocument()
  })

  it('shows empty state when no exams', async () => {
    mockFrom.mockReturnValue({
      select: vi.fn().mockReturnThis(),
      eq: vi.fn().mockReturnThis(),
      order: vi.fn().mockResolvedValue({ data: [], error: null }),
    })

    render(
      <ExamSelectionModal
        isOpen={true}
        onClose={vi.fn()}
        course={mockCourse}
      />
    )

    await waitFor(() => {
      expect(screen.getByText('No exams available for this course yet.')).toBeInTheDocument()
    })
  })

  it('closes modal when close button clicked', async () => {
    const onClose = vi.fn()

    render(
      <ExamSelectionModal
        isOpen={true}
        onClose={onClose}
        course={mockCourse}
      />
    )

    await waitFor(() => {
      expect(screen.getByText('Test Course')).toBeInTheDocument()
    })

    const closeButton = screen.getByTestId('x-icon').closest('button')
    if (closeButton) {
      fireEvent.click(closeButton)
    }

    expect(onClose).toHaveBeenCalled()
  })

  it('closes when backdrop is clicked', async () => {
    const onClose = vi.fn()

    render(
      <ExamSelectionModal
        isOpen={true}
        onClose={onClose}
        course={mockCourse}
      />
    )

    await waitFor(() => {
      expect(screen.getByText('Test Course')).toBeInTheDocument()
    })

    const backdrop = document.querySelector('.backdrop-blur-sm') as HTMLElement
    expect(backdrop).toBeTruthy()
    fireEvent.click(backdrop)

    expect(onClose).toHaveBeenCalled()
  })

  it('renders descriptions only when available', async () => {
    render(
      <ExamSelectionModal
        isOpen={true}
        onClose={vi.fn()}
        course={mockCourse}
      />
    )

    await waitFor(() => {
      expect(screen.getByText('Exam 1')).toBeInTheDocument()
    })

    expect(screen.getByText('Test exam 1')).toBeInTheDocument()
    expect(screen.queryByText((content) => content.includes('Test exam 2'))).not.toBeInTheDocument()
  })
})
