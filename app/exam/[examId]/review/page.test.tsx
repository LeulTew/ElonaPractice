"use client"

import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import ReviewPage from './page'
import { supabase } from '@/lib/supabase'

// Mock next/navigation
const mockRouter = { back: vi.fn(), push: vi.fn() }
vi.mock('next/navigation', () => ({
  useRouter: () => mockRouter,
  useParams: () => ({ examId: 'exam-123' }),
  useSearchParams: () => new URLSearchParams({ attemptId: 'attempt-123' }),
}))

// Mock supabase
vi.mock('@/lib/supabase', () => ({
  supabase: {
    from: vi.fn((table) => {
      if (table === 'exam_attempts') {
        return {
          select: vi.fn(() => ({
            eq: vi.fn(() => ({
              single: vi.fn(() => Promise.resolve({
                data: {
                  id: 'attempt-123',
                  score: 8,
                  total_points: 10,
                  answers: { 'q1': 'A', 'q2': 'B' }
                },
                error: null
              }))
            }))
          }))
        }
      } else if (table === 'questions') {
        return {
          select: vi.fn(() => ({
            eq: vi.fn(() => ({
              order: vi.fn(() => Promise.resolve({
                data: [
                  {
                    id: 'q1',
                    content: 'Test question 1',
                    question_type: 'MCQ',
                    options: ['A', 'B'],
                    correct_answer: 'A',
                    explanation: 'Test explanation 1',
                    order_index: 0,
                    points: 1
                  },
                  {
                    id: 'q2',
                    content: 'Test question 2',
                    question_type: 'MCQ',
                    options: ['C', 'D'],
                    correct_answer: 'C',
                    explanation: 'Test explanation 2',
                    order_index: 1,
                    points: 1
                  }
                ],
                error: null
              }))
            }))
          }))
        }
      }
      return {} as unknown as ReturnType<typeof supabase.from>
    })
  }
}))

// Mock window.print
const mockPrint = vi.fn()
Object.defineProperty(window, 'print', { value: mockPrint })

describe('ReviewPage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders review page with question number', async () => {
    render(<ReviewPage />)

    await waitFor(() => {
      expect(screen.getByText('01')).toBeInTheDocument()
    })
  })

  it('opens questions modal on mobile', async () => {
    // Mock small screen
    Object.defineProperty(window, 'innerWidth', { writable: true, value: 375 })

    render(<ReviewPage />)

    await waitFor(() => {
      expect(screen.getByText('01')).toBeInTheDocument()
    })

    const floatingButton = screen.getByRole('button', { name: /open questions menu/i })
    fireEvent.click(floatingButton)

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument()
    })

    // Close modal
    const closeButton = screen.getByRole('button', { name: /close/i })
    fireEvent.click(closeButton)

    await waitFor(() => {
      expect(screen.queryByRole('button', { name: /close/i })).not.toBeInTheDocument()
    })
  })

  it('handles navigation between questions', async () => {
    render(<ReviewPage />)

    await waitFor(() => {
      expect(screen.getByText('01')).toBeInTheDocument()
    })

    // Click Next button
    const nextButton = screen.getByRole('button', { name: /next/i })
    fireEvent.click(nextButton)

    await waitFor(() => {
      expect(screen.getByText('02')).toBeInTheDocument()
    })

    // Click Previous button
    const prevButton = screen.getByRole('button', { name: /previous/i })
    fireEvent.click(prevButton)

    await waitFor(() => {
      expect(screen.getByText('01')).toBeInTheDocument()
    })
  })

  it('shows Back to Results button on last question', async () => {
    render(<ReviewPage />)

    await waitFor(() => {
      expect(screen.getByText('01')).toBeInTheDocument()
    })

    // Navigate to last question
    const nextButton = screen.getByRole('button', { name: /next/i })
    fireEvent.click(nextButton)

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /back to results/i })).toBeInTheDocument()
    })

    // Click Back to Results
    fireEvent.click(screen.getByRole('button', { name: /back to results/i }))
    expect(mockRouter.push).toHaveBeenCalledWith('/exam/exam-123/results?attemptId=attempt-123')
  })

  it('handles print functionality', async () => {
    render(<ReviewPage />)

    await waitFor(() => {
      expect(screen.getByText('01')).toBeInTheDocument()
    })

    const printButton = screen.getByRole('button', { name: /download pdf/i })
    fireEvent.click(printButton)

    expect(mockPrint).toHaveBeenCalled()
  })

  it('handles data fetching errors', async () => {
    // Mock error response
    const mockSingle = vi.fn(() => Promise.resolve({
      data: null,
      error: { message: 'Not found' }
    }))
    const mockEq = vi.fn(() => ({ single: mockSingle }))
    const mockSelect = vi.fn(() => ({ eq: mockEq }))


    // Override the global mock for this test only
    vi.mocked(supabase.from).mockReturnValueOnce({
      select: mockSelect
    } as unknown as ReturnType<typeof supabase.from>)

    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    render(<ReviewPage />)

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith('Error fetching review data:', expect.any(Object))
    })

    consoleSpy.mockRestore()
  })

  it('shows error state when no data', async () => {
    // Mock empty data
    const mockSingle = vi.fn(() => Promise.resolve({
      data: null,
      error: null
    }))
    const mockEq = vi.fn(() => ({ single: mockSingle }))
    const mockSelect = vi.fn(() => ({ eq: mockEq }))


    // Override the global mock for this test only
    vi.mocked(supabase.from).mockReturnValueOnce({
      select: mockSelect
    } as unknown as ReturnType<typeof supabase.from>)

    render(<ReviewPage />)

    await waitFor(() => {
      expect(screen.getByText('Review data not found')).toBeInTheDocument()
    })

    const dashboardButton = screen.getByRole('button', { name: /return to dashboard/i })
    fireEvent.click(dashboardButton)
    expect(mockRouter.push).toHaveBeenCalledWith('/dashboard')
  })

  it('renders correct/incorrect status', async () => {
    render(<ReviewPage />)

    await waitFor(() => {
      expect(screen.getByText('Correct')).toBeInTheDocument()
    })
  })

  it('renders explanation section', async () => {
    render(<ReviewPage />)

    await waitFor(() => {
      expect(screen.getByText('Explanation')).toBeInTheDocument()
      expect(screen.getByText('Test explanation 1')).toBeInTheDocument()
    })
  })

  it('handles array answers correctly', async () => {
    // Mock data with array answers
    const mockAttempt = {
      id: 'attempt-123',
      score: 8,
      total_points: 10,
      answers: { 'q1': ['A', 'B'] }
    }

    const mockQuestions = [
      {
        id: 'q1',
        content: 'Test question with array answer',
        question_type: 'MULTI_SELECT',
        options: ['A', 'B', 'C'],
        correct_answer: ['A', 'B'],
        explanation: 'Test explanation',
        order_index: 0,
        points: 1
      }
    ]

    const mockAttemptSingle = vi.fn(() => Promise.resolve({ data: mockAttempt, error: null }))
    const mockAttemptEq = vi.fn(() => ({ single: mockAttemptSingle }))
    const mockAttemptSelect = vi.fn(() => ({ eq: mockAttemptEq }))
    const mockAttemptFrom = vi.fn(() => ({ select: mockAttemptSelect }))

    const mockQuestionsOrder = vi.fn(() => Promise.resolve({ data: mockQuestions, error: null }))
    const mockQuestionsEq = vi.fn(() => ({ order: mockQuestionsOrder }))
    const mockQuestionsSelect = vi.fn(() => ({ eq: mockQuestionsEq }))
    const mockQuestionsFrom = vi.fn(() => ({ select: mockQuestionsSelect }))

    // Override the global mock for this test
    vi.mocked(supabase.from).mockImplementation(((table: string) => {
      if (table === 'exam_attempts') return mockAttemptFrom()
      if (table === 'questions') return mockQuestionsFrom()
      return {}
    }) as unknown as (table: string) => ReturnType<typeof supabase.from>)

    render(<ReviewPage />)

    await waitFor(() => {
      expect(screen.getByText('Correct')).toBeInTheDocument()
      // Look for the answer in the user answer section specifically
      const userAnswerElements = screen.getAllByText('Your Answer:')
      const userAnswerSection = userAnswerElements[0].parentElement
      expect(userAnswerSection).toHaveTextContent('A, B')
    })

    // Restore the global mock
    vi.restoreAllMocks()
  })

  it('handles object answers correctly', async () => {
    // Mock data with object answers
    const mockAttempt = {
      id: 'attempt-123',
      score: 8,
      total_points: 10,
      answers: { 'q1': { key: 'value' } }
    }

    const mockQuestions = [
      {
        id: 'q1',
        content: 'Test question with object answer',
        question_type: 'MATCHING',
        correct_answer: { key: 'value' },
        explanation: 'Test explanation',
        order_index: 0,
        points: 1
      }
    ]

    const mockAttemptSingle = vi.fn(() => Promise.resolve({ data: mockAttempt, error: null }))
    const mockAttemptEq = vi.fn(() => ({ single: mockAttemptSingle }))
    const mockAttemptSelect = vi.fn(() => ({ eq: mockAttemptEq }))
    const mockAttemptFrom = vi.fn(() => ({ select: mockAttemptSelect }))

    const mockQuestionsOrder = vi.fn(() => Promise.resolve({ data: mockQuestions, error: null }))
    const mockQuestionsEq = vi.fn(() => ({ order: mockQuestionsOrder }))
    const mockQuestionsSelect = vi.fn(() => ({ eq: mockQuestionsEq }))
    const mockQuestionsFrom = vi.fn(() => ({ select: mockQuestionsSelect }))

    // Override the global mock for this test
    vi.mocked(supabase.from).mockImplementation(((table: string) => {
      if (table === 'exam_attempts') return mockAttemptFrom()
      if (table === 'questions') return mockQuestionsFrom()
      return {}
    }) as unknown as (table: string) => ReturnType<typeof supabase.from>)

    render(<ReviewPage />)

    await waitFor(() => {
      expect(screen.getByText('Correct')).toBeInTheDocument()
      // Look for the answer in the user answer section specifically
      const userAnswerElements = screen.getAllByText('Your Answer:')
      const userAnswerSection = userAnswerElements[0].parentElement
      expect(userAnswerSection).toHaveTextContent('{"key":"value"}')
    })

    // Restore the global mock
    vi.restoreAllMocks()
  })

  it('handles null/undefined answers correctly', async () => {
    // Mock data with null answer
    const mockAttempt = {
      id: 'attempt-123',
      score: 8,
      total_points: 10,
      answers: { 'q1': null }
    }

    const mockQuestions = [
      {
        id: 'q1',
        content: 'Test question with null answer',
        question_type: 'SHORT_ANSWER',
        correct_answer: 'expected answer',
        explanation: 'Test explanation',
        order_index: 0,
        points: 1
      }
    ]

    const mockAttemptSingle = vi.fn(() => Promise.resolve({ data: mockAttempt, error: null }))
    const mockAttemptEq = vi.fn(() => ({ single: mockAttemptSingle }))
    const mockAttemptSelect = vi.fn(() => ({ eq: mockAttemptEq }))
    const mockAttemptFrom = vi.fn(() => ({ select: mockAttemptSelect }))

    const mockQuestionsOrder = vi.fn(() => Promise.resolve({ data: mockQuestions, error: null }))
    const mockQuestionsEq = vi.fn(() => ({ order: mockQuestionsOrder }))
    const mockQuestionsSelect = vi.fn(() => ({ eq: mockQuestionsEq }))
    const mockQuestionsFrom = vi.fn(() => ({ select: mockQuestionsSelect }))

    // Override the global mock for this test only
    vi.mocked(supabase.from).mockImplementationOnce(((table: string) => {
      if (table === 'exam_attempts') return mockAttemptFrom()
      if (table === 'questions') return mockQuestionsFrom()
      return {}
    }) as unknown as (table: string) => ReturnType<typeof supabase.from>)

    render(<ReviewPage />)

    await waitFor(() => {
      expect(screen.getByText('Incorrect')).toBeInTheDocument()
      // Look for the answer in the user answer section specifically
      const userAnswerElements = screen.getAllByText('Your Answer:')
      const userAnswerSection = userAnswerElements[0].parentElement
      expect(userAnswerSection).toHaveTextContent('No answer provided')
    })

    // Restore the global mock
    vi.restoreAllMocks()
  })

  it('handles string answers correctly', async () => {
    // Mock data with string answer
    const mockAttempt = {
      id: 'attempt-123',
      score: 8,
      total_points: 10,
      answers: { 'q1': 'user answer' }
    }

    const mockQuestions = [
      {
        id: 'q1',
        content: 'Test question with string answer',
        question_type: 'SHORT_ANSWER',
        correct_answer: 'user answer',
        explanation: 'Test explanation',
        order_index: 0,
        points: 1
      }
    ]

    const mockAttemptSingle = vi.fn(() => Promise.resolve({ data: mockAttempt, error: null }))
    const mockAttemptEq = vi.fn(() => ({ single: mockAttemptSingle }))
    const mockAttemptSelect = vi.fn(() => ({ eq: mockAttemptEq }))
    const mockAttemptFrom = vi.fn(() => ({ select: mockAttemptSelect }))

    const mockQuestionsOrder = vi.fn(() => Promise.resolve({ data: mockQuestions, error: null }))
    const mockQuestionsEq = vi.fn(() => ({ order: mockQuestionsOrder }))
    const mockQuestionsSelect = vi.fn(() => ({ eq: mockQuestionsEq }))
    const mockQuestionsFrom = vi.fn(() => ({ select: mockQuestionsSelect }))

    // Override the global mock for this test only
    vi.mocked(supabase.from).mockImplementation(((table: string) => {
      if (table === 'exam_attempts') return mockAttemptFrom()
      if (table === 'questions') return mockQuestionsFrom()
      return {}
    }) as unknown as (table: string) => ReturnType<typeof supabase.from>)

    render(<ReviewPage />)

    await waitFor(() => {
      expect(screen.getByText('Correct')).toBeInTheDocument()
      // Look for the answer in the user answer section specifically
      const userAnswerElements = screen.getAllByText('Your Answer:')
      const userAnswerSection = userAnswerElements[0].parentElement
      expect(userAnswerSection).toHaveTextContent('user answer')
    })

    // Don't restore mocks for the last test
    vi.restoreAllMocks()
  })
})