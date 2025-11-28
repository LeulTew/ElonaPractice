
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import ReviewPage from './page'
import { supabase } from '@/lib/supabase'

// Mock Supabase
vi.mock('@/lib/supabase', () => ({
  supabase: {
    from: vi.fn()
  }
}))

// Mock Next.js hooks
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    back: vi.fn()
  }),
  useParams: () => ({
    examId: 'exam-123'
  }),
  useSearchParams: () => ({
    get: (key: string) => key === 'attemptId' ? 'attempt-123' : null
  })
}))

describe('ReviewPage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('fetches and displays review data correctly', async () => {
    const mockAttempt = {
      id: 'attempt-123',
      score: 80,
      total_points: 100,
      answers: {} // Old format empty
    }

    const mockQuestions = [
      {
        id: 'q1',
        content: 'Question 1',
        question_type: 'MCQ',
        options: ['A', 'B'],
        correct_answer: 'A',
        points: 1,
        order_index: 0
      }
    ]

    const mockUserAnswers = [
      { question_id: 'q1', user_answer: 'A' }
    ]

    const mockSelectAttempt = vi.fn().mockReturnValue({ eq: vi.fn().mockReturnValue({ single: vi.fn().mockResolvedValue({ data: mockAttempt, error: null }) }) })
    const mockSelectQuestions = vi.fn().mockReturnValue({ eq: vi.fn().mockReturnValue({ order: vi.fn().mockResolvedValue({ data: mockQuestions, error: null }) }) })
    const mockSelectAnswers = vi.fn().mockReturnValue({ eq: vi.fn().mockResolvedValue({ data: mockUserAnswers, error: null }) })

    const mockFrom = vi.fn((table) => {
      if (table === 'exam_attempts') return { select: mockSelectAttempt }
      if (table === 'questions') return { select: mockSelectQuestions }
      if (table === 'user_answers') return { select: mockSelectAnswers }
      return { select: vi.fn() }
    })

    // @ts-expect-error - mocking supabase client
    supabase.from.mockImplementation(mockFrom)

    render(<ReviewPage />)

    screen.debug()
    const label = await screen.findByTestId('user-answer-label')
    expect(label).toBeInTheDocument()
    expect(screen.getAllByText('A')[0]).toBeInTheDocument()
    expect(screen.getByText('Correct')).toBeInTheDocument()
  })
})
