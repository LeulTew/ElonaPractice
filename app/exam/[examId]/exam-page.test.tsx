import { render, screen, fireEvent, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ExamPage, { Question } from './page'
import { describe, it, expect, vi, beforeEach } from 'vitest'

// Hoist mock data
interface UserAnswer {
  question_id: string
  user_answer: unknown
  points_earned: number
  is_correct: boolean
}

const mocks = vi.hoisted(() => ({
  questions: [
    {
      id: 'q1',
      content: 'Question 1',
      question_type: 'MCQ',
      options: ['Option A', 'Option B'],
      correct_answer: 'Option A',
      points: 1,
      hint: 'This is a hint for Q1'
    },
    {
      id: 'q2',
      content: 'Question 2',
      question_type: 'TRUE_FALSE',
      options: ['True', 'False'],
      correct_answer: 'True',
      points: 1,
      hint: 'This is a hint for Q2'
    },
    {
      id: 'q3',
      content: 'Match Items',
      question_type: 'MATCHING',
      options: [
        { left: 'A', right: '1' },
        { left: 'B', right: '2' }
      ],
      correct_answer: { 'A': '1', 'B': '2' },
      points: 1
    },
    {
      id: 'q4',
      content: 'Order Items',
      question_type: 'ORDER_SEQUENCE',
      options: ['First', 'Second', 'Third'],
      correct_answer: ['First', 'Second', 'Third'],
      points: 1
    },
    {
      id: 'q5',
      content: 'Fill blank question',
      question_type: 'FILL_BLANK',
      options: [],
      correct_answer: 'Sample answer',
      points: 1
    },
    {
      id: 'q6',
      content: 'Short answer question',
      question_type: 'SHORT_ANSWER',
      options: [],
      correct_answer: 'Sample answer',
      points: 1
    }
  ],
  exam: {
    id: 'exam-123',
    title: 'Test Exam',
    duration_minutes: 60,
    passing_score: 70,
  },
  mode: 'PRACTICE' // Default mode
}))

const mockRouterPush = vi.fn()
const clipboardMock = { writeText: vi.fn().mockResolvedValue(undefined) }
Object.assign(navigator, { clipboard: clipboardMock })
const windowOpenSpy = vi.spyOn(window, 'open').mockImplementation(() => null)

// Mock next/navigation
vi.mock('next/navigation', () => ({
  useParams: () => ({ examId: 'exam-123' }),
  useSearchParams: () => new URLSearchParams({ mode: mocks.mode }),
  useRouter: () => ({ push: mockRouterPush }),
}))

const mockSupabaseFrom = vi.fn()

const setupSupabase = (options?: {
  examData?: typeof mocks.exam | null
  examPromise?: Promise<{ data: unknown; error: unknown }>
  questionsData?: typeof mocks.questions | null
  questionsPromise?: Promise<{ data: unknown; error: unknown }>
  insertHandler?: (payload: unknown) => Promise<{ data: unknown; error: unknown }>
  userAnswersHandler?: (payload: unknown) => Promise<{ data: unknown; error: unknown }>
}) => {
  const {
    examData = mocks.exam,
    examPromise,
    questionsData = mocks.questions,
    questionsPromise,
    insertHandler,
    userAnswersHandler,
  } = options || {}

  mockSupabaseFrom.mockImplementation((table: string) => {
    if (table === 'questions') {
      return {
        select: () => ({
          eq: () => ({
            order: () => questionsPromise ?? Promise.resolve({ data: questionsData, error: null }),
          }),
        }),
      }
    }
    if (table === 'exams') {
      return {
        select: () => ({
          eq: () => ({
            single: () => examPromise ?? Promise.resolve({ data: examData, error: null }),
          }),
        }),
      }
    }
    if (table === 'exam_attempts') {
      return {
        insert: (payload: unknown) => ({
          select: () => ({
            single: () =>
              insertHandler
                ? insertHandler(payload)
                : Promise.resolve({ data: { id: 'attempt-default' }, error: null }),
          }),
        }),
      }
    }
    if (table === 'user_answers') {
      return {
        insert: (payload: unknown) => 
          userAnswersHandler 
            ? userAnswersHandler(payload) 
            : Promise.resolve({ data: null, error: null }),
      }
    }
    return {
      select: () => ({
        eq: () => ({
          single: () => Promise.resolve({ data: null, error: null }),
        }),
      }),
    }
  })
}

// Mock supabase
vi.mock('@/lib/supabase', () => ({
  supabase: {
    from: (...args: unknown[]) => mockSupabaseFrom(...args),
  },
}))

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

// Mock AIHelpButton
vi.mock('@/components/ui/ai-help-button', () => ({
  AIHelpButton: ({ onAIResponse }: { onAIResponse?: (message: string) => void }) => (
    <button onClick={() => onAIResponse?.('Mock AI Response')}>AI Help</button>
  ),
}))

describe('ExamPage Integration', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockSupabaseFrom.mockReset()
    mockRouterPush.mockReset()
    mocks.mode = 'PRACTICE' // Reset mode
    setupSupabase()
    
    // Set desktop size
    window.innerWidth = 1024
    fireEvent(window, new Event('resize'))
  })

  it('renders exam title and first question', async () => {
    render(<ExamPage />)

    await waitFor(() => {
      expect(screen.getByText('Test Exam')).toBeInTheDocument()
    })

    expect(screen.getByText('Question 1')).toBeInTheDocument()
    expect(screen.getByText('Option A')).toBeInTheDocument()
  })

  it('navigates to next question', async () => {
    render(<ExamPage />)

    await waitFor(() => {
      expect(screen.getByText('Question 1')).toBeInTheDocument()
    })

    const nextButton = screen.getAllByRole('button', { name: /next/i })[0]
    fireEvent.click(nextButton)

    expect(screen.getByText('Question 2')).toBeInTheDocument()
  })

  it('shows submit button on last question', async () => {
    render(<ExamPage />)

    await waitFor(() => {
      expect(screen.getByText('Question 1')).toBeInTheDocument()
    })

    // Go to last question
    const q4SidebarBtn = screen.getByRole('button', { name: /4/i })
    fireEvent.click(q4SidebarBtn)

    await screen.findByText('Order Items')

    expect(screen.getByTestId('finish-exam-button')).toBeInTheDocument()
  })

  it('shows hint when requested', async () => {
    render(<ExamPage />)

    await waitFor(() => {
      expect(screen.getByText('Question 1')).toBeInTheDocument()
    })

    const hintButton = screen.getByRole('button', { name: /Show Hint/i })
    fireEvent.click(hintButton)

    expect(screen.getByText('This is a hint for Q1')).toBeInTheDocument()
  })

  it('renders timer in exam mode', async () => {
    mocks.mode = 'EXAM'
    render(<ExamPage />)

    await waitFor(() => {
      expect(screen.getByText('Test Exam')).toBeInTheDocument()
    })

    // 60 minutes = 60:00
    expect(screen.getByText('60:00')).toBeInTheDocument()
  })
  it('toggles mark on question', async () => {
    render(<ExamPage />)

    await waitFor(() => {
      expect(screen.getByText('Question 1')).toBeInTheDocument()
    })

    const markButton = screen.getByRole('button', { name: /Mark/i })
    
    // Mark
    fireEvent.click(markButton)
    await waitFor(() => {
      expect(markButton).toHaveTextContent('Marked')
    })
    
    // Unmark
    fireEvent.click(markButton)
    await waitFor(() => {
      expect(markButton).toHaveTextContent('Mark')
    })
  })

  it('navigates via sidebar', async () => {
    render(<ExamPage />)

    await waitFor(() => {
      expect(screen.getByText('Question 1')).toBeInTheDocument()
    })

    // Open sidebar (desktop default open, but let's ensure)
    // The sidebar renders question numbers. Click on Q2.
    const q2SidebarBtn = screen.getByRole('button', { name: /2/i })
    fireEvent.click(q2SidebarBtn)

    expect(screen.getByText('Question 2')).toBeInTheDocument()
  })

  it('submits exam and saves attempt', async () => {
    const insertMock = vi.fn().mockResolvedValue({ data: { id: 'attempt-123' }, error: null })
    const userAnswersInsertMock = vi.fn().mockResolvedValue({ data: null, error: null })

    mockSupabaseFrom.mockImplementation((table: string) => {
      if (table === 'questions') {
        return {
          select: () => ({
            eq: () => ({
              order: () => Promise.resolve({ data: mocks.questions, error: null }),
            }),
          }),
        }
      }
      if (table === 'exams') {
        return {
          select: () => ({
            eq: () => ({
              single: () => Promise.resolve({ data: mocks.exam, error: null }),
            }),
          }),
        }
      }
      if (table === 'exam_attempts') {
        return {
          insert: (payload: unknown) => ({
            select: () => ({
              single: () => insertMock(payload),
            }),
          }),
        }
      }
      if (table === 'user_answers') {
        return {
          insert: (payload: unknown) => userAnswersInsertMock(payload),
        }
      }
      return {
        select: () => ({
          eq: () => ({
            single: () => Promise.resolve({ data: null, error: null }),
          }),
        }),
      }
    })

    render(<ExamPage />)

    await waitFor(() => {
      expect(screen.getByText('Question 1')).toBeInTheDocument()
    })

    // Answer Q1
    const optionA = screen.getByText('Option A')
    fireEvent.click(optionA)

    // Go to last question
    const q4SidebarBtn = screen.getByRole('button', { name: /4/i })
    fireEvent.click(q4SidebarBtn)

    // Finish - Use regex to match either "Finish" or "Finish Exam"
    const finishButton = screen.getByTestId('finish-exam-button')
    fireEvent.click(finishButton)

    await waitFor(() => {
      expect(insertMock).toHaveBeenCalled()
      expect(userAnswersInsertMock).toHaveBeenCalled()
      expect(mockRouterPush).toHaveBeenCalledWith('/exam/exam-123/results?attemptId=attempt-123')
    })
  })

  it('shows exit warning in exam mode', async () => {
    mocks.mode = 'EXAM'
    render(<ExamPage />)

    await waitFor(() => {
      expect(screen.getByText('Test Exam')).toBeInTheDocument()
    })

    const exitButton = screen.getByRole('button', { name: /Exit/i })
    fireEvent.click(exitButton)

    // Use findByText to wait for modal animation
    expect(await screen.findByText(/Are you sure you want to exit/i)).toBeInTheDocument()

    const overlay = screen.getByTestId('exit-warning-overlay')
    fireEvent.click(overlay)

    await waitFor(() => {
      expect(screen.queryByText(/Are you sure you want to exit/i)).not.toBeInTheDocument()
    })

    fireEvent.click(exitButton)
    await screen.findByText(/Are you sure you want to exit/i)

    fireEvent.click(screen.getByRole('button', { name: /^Cancel$/i }))
    await waitFor(() => {
      expect(screen.queryByText(/Are you sure you want to exit/i)).not.toBeInTheDocument()
    })

    fireEvent.click(exitButton)
    const confirmButton = await screen.findByRole('button', { name: /Exit Exam/i })
    fireEvent.click(confirmButton)

    await waitFor(() => {
      expect(mockRouterPush).toHaveBeenCalledWith('/courses')
    })
  })

  it('handles matching question interaction', async () => {
    render(<ExamPage />)

    await waitFor(() => {
      expect(screen.getByText('Question 1')).toBeInTheDocument()
    })

    // Navigate to Matching Question (Q3)
    const q3SidebarBtn = screen.getByRole('button', { name: /3/i })
    fireEvent.click(q3SidebarBtn)

    await waitFor(() => {
      expect(screen.getByText('Match Items')).toBeInTheDocument()
    })

    // Select Left Item 'A'
    const itemA = screen.getByText('A')
    fireEvent.click(itemA)
    
    // Select Right Item '1' - Use getAllByText and pick the button (first one usually, or check parent)
    // The options are buttons or divs. Let's be specific.
    const item1 = screen.getAllByText('1').find(el => el.tagName === 'DIV' && el.className.includes('cursor-pointer'))
    if (item1) fireEvent.click(item1)

    // Verify match is visually indicated
    // When matched, the right item appears inside the left item's box
    await waitFor(() => {
      const matchedContainer = screen.getByText('A').closest('div')
      expect(matchedContainer).toHaveTextContent('1')
    })
  })

  it('handles order sequence interaction', async () => {
    render(<ExamPage />)

    await waitFor(() => {
      expect(screen.getByText('Question 1')).toBeInTheDocument()
    })

    // Navigate to Order Question (Q4)
    const q4SidebarBtn = screen.getByRole('button', { name: /4/i })
    fireEvent.click(q4SidebarBtn)

    await waitFor(() => {
      expect(screen.getByText('Order Items')).toBeInTheDocument()
    })

    // Verify all items are rendered
    expect(screen.getByText('First')).toBeInTheDocument()
    expect(screen.getByText('Second')).toBeInTheDocument()
    expect(screen.getByText('Third')).toBeInTheDocument()
    
    // Verify move buttons exist (just check that we can find buttons, don't test the actual move logic)
    const allButtons = screen.getAllByRole('button')
    // Should have sidebar buttons + move up/down buttons for the order sequence
    expect(allButtons.length).toBeGreaterThan(4)
  })

  it('returns to the previous question using footer navigation', async () => {
    render(<ExamPage />)

    await waitFor(() => {
      expect(screen.getByText('Question 1')).toBeInTheDocument()
    })

    fireEvent.click(screen.getAllByRole('button', { name: /^Next$/i })[0])

    await waitFor(() => {
      expect(screen.getByText('Question 2')).toBeInTheDocument()
    })

    fireEvent.click(screen.getAllByRole('button', { name: /^Previous$/i })[0])

    await waitFor(() => {
      expect(screen.getByText('Question 1')).toBeInTheDocument()
    })
  })

  it('closes the sidebar using the inline close button on mobile', async () => {
    const previousWidth = window.innerWidth
    window.innerWidth = 375
    setupSupabase()

    try {
      render(<ExamPage />)

      await waitFor(() => {
        expect(screen.getByText('Question 1')).toBeInTheDocument()
      })

      fireEvent.click(screen.getByLabelText('Toggle sidebar'))

      const closeButton = await screen.findByLabelText('Close sidebar')
      fireEvent.click(closeButton)

      await waitFor(() => {
        expect(screen.queryByTestId('sidebar-backdrop')).not.toBeInTheDocument()
      })
    } finally {
      window.innerWidth = previousWidth
    }
  })

  it('navigates back to courses immediately in practice mode when exiting', async () => {
    render(<ExamPage />)

    await waitFor(() => {
      expect(screen.getByText('Question 1')).toBeInTheDocument()
    })

    fireEvent.click(screen.getByRole('button', { name: /^Exit$/i }))

    expect(mockRouterPush).toHaveBeenCalledWith('/courses')
  })

  it('displays loading state while questions are still fetching', async () => {
    const pendingQuestions = new Promise<{ data: unknown; error: unknown }>(() => {})
    setupSupabase({ questionsPromise: pendingQuestions })

    render(<ExamPage />)

    await waitFor(() => {
      expect(screen.getByText('Loading exam...')).toBeInTheDocument()
    })
  })

  it('renders fallback when no questions are returned', async () => {
    setupSupabase({ questionsData: [] })

    render(<ExamPage />)

    await waitFor(() => {
      expect(screen.getByText('Loading questions...')).toBeInTheDocument()
    })
  })



  it('renders fill-in-the-blank inputs and shows correct answer when toggled', async () => {
    const fillBlankQuestion = [
      {
        id: 'fill-1',
        content: 'Name the ______ type of bond.',
        question_type: 'FILL_BLANK',
        options: [],
        correct_answer: 'Sigma bond',
        points: 1,
      },
    ]
    setupSupabase({ questionsData: fillBlankQuestion })

    render(<ExamPage />)

    await waitFor(() => {
      expect(screen.getByText(/Name the/i)).toBeInTheDocument()
    })

    const input = screen.getByPlaceholderText('Type answer...') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'Sigma bond' } })

    fireEvent.click(screen.getByRole('button', { name: /Show Answer/i }))

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /Hide Answer/i })).toBeInTheDocument()
    })

    expect(input).toHaveValue('Sigma bond')
    expect(input).toBeDisabled()
    const sampleAnswer = screen.getByText('Sample Answer / Key Points:').parentElement as HTMLElement
    expect(sampleAnswer).toHaveTextContent('Sigma bond')
  })

  it('renders text-based questions with the textarea fallback and sample answer', async () => {
    const textQuestion = [
      {
        id: 'text-1',
        content: 'Explain the significance of enzymes.',
        question_type: 'SHORT_ANSWER',
        options: [],
        correct_answer: 'Enzymes lower activation energy.',
        points: 2,
      },
    ]
    setupSupabase({ questionsData: textQuestion })

    render(<ExamPage />)

    await waitFor(() => {
      expect(screen.getByText('Explain the significance of enzymes.')).toBeInTheDocument()
    })

    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement
    fireEvent.change(textarea, { target: { value: 'They catalyze reactions.' } })
    expect(textarea).toHaveValue('They catalyze reactions.')

    fireEvent.click(screen.getByRole('button', { name: /Show Answer/i }))

    expect(await screen.findByText('Sample Answer / Key Points:')).toBeInTheDocument()
    expect(screen.getByText(/Enzymes lower activation energy/i)).toBeInTheDocument()
  })

  it('allows removing an existing matching pair', async () => {
    render(<ExamPage />)

    await waitFor(() => {
      expect(screen.getByText('Question 1')).toBeInTheDocument()
    })

    const q3SidebarBtn = screen.getByRole('button', { name: /3/i })
    fireEvent.click(q3SidebarBtn)

    await waitFor(() => {
      expect(screen.getByText('Match Items')).toBeInTheDocument()
    })

    const itemA = screen.getByText('A')
    fireEvent.click(itemA)

    const optionOne = screen.getAllByText('1').find((el) => el.className.includes('cursor-pointer')) as HTMLElement | undefined
    expect(optionOne).toBeTruthy()
    fireEvent.click(optionOne as HTMLElement)

    const pairContainer = itemA.closest('div') as HTMLElement
    const removeButton = within(pairContainer).getByRole('button', { name: /Remove match for A/i })
    fireEvent.click(removeButton)

    await waitFor(() => {
      expect(pairContainer).not.toHaveTextContent('1')
    })
  })

  it('shows the correct matching pairs when answers are revealed', async () => {
    render(<ExamPage />)

    await waitFor(() => {
      expect(screen.getByText('Question 1')).toBeInTheDocument()
    })

    const q3SidebarBtn = screen.getByRole('button', { name: /3/i })
    fireEvent.click(q3SidebarBtn)

    await waitFor(() => {
      expect(screen.getByText('Match Items')).toBeInTheDocument()
    })

    fireEvent.click(screen.getByRole('button', { name: /Show Answer/i }))

    const correctHeading = await screen.findByText('Correct Matches:')
    const matchesContainer = correctHeading.parentElement as HTMLElement
    expect(matchesContainer).toHaveTextContent('A')
    expect(matchesContainer).toHaveTextContent('1')
  })

  it('reorders order-sequence questions using the move controls', async () => {
    const randomSpy = vi.spyOn(Math, 'random').mockReturnValue(0.5)
    try {
      render(<ExamPage />)

      await waitFor(() => {
        expect(screen.getByText('Question 1')).toBeInTheDocument()
      })

      const q4SidebarBtn = screen.getByRole('button', { name: /4/i })
      fireEvent.click(q4SidebarBtn)

      await waitFor(() => {
        expect(screen.getByText('Order Items')).toBeInTheDocument()
      })

      const moveDownFirst = screen.getByRole('button', { name: /Move First down/i })
      fireEvent.click(moveDownFirst)

      await waitFor(() => {
        const orderedLabels = screen.getAllByTestId('order-item-label')
        expect(orderedLabels[0]).toHaveTextContent('Second')
        expect(orderedLabels[1]).toHaveTextContent('First')
      })
    } finally {
      randomSpy.mockRestore()
    }
  })

  it('displays the correct order when answers are revealed', async () => {
    const randomSpy = vi.spyOn(Math, 'random').mockReturnValue(0.8)
    try {
      render(<ExamPage />)

      await waitFor(() => {
        expect(screen.getByText('Question 1')).toBeInTheDocument()
      })

      const q4SidebarBtn = screen.getByRole('button', { name: /4/i })
      fireEvent.click(q4SidebarBtn)

      await waitFor(() => {
        expect(screen.getByText('Order Items')).toBeInTheDocument()
      })

      // Force an incorrect arrangement so the reveal panel appears consistently
      fireEvent.click(screen.getAllByRole('button', { name: /Move .* down/i })[0])

      fireEvent.click(screen.getByRole('button', { name: /Show Answer/i }))

      expect(await screen.findByText('Correct Order:')).toBeInTheDocument()
      const orderedList = screen.getByRole('list')
      expect(within(orderedList).getAllByRole('listitem').length).toBe(3)
    } finally {
      randomSpy.mockRestore()
    }
  })

  it('registers a beforeunload guard in exam mode', async () => {
    mocks.mode = 'EXAM'
    const addListener = vi.spyOn(window, 'addEventListener')
    const removeListener = vi.spyOn(window, 'removeEventListener')

    const { unmount } = render(<ExamPage />)

    await waitFor(() => {
      expect(screen.getByText('Test Exam')).toBeInTheDocument()
    })

    expect(addListener).toHaveBeenCalledWith('beforeunload', expect.any(Function))

    const event = new Event('beforeunload') as BeforeUnloadEvent
    const preventDefault = vi.fn()
    event.preventDefault = preventDefault as unknown as () => void
    Object.defineProperty(event, 'returnValue', { writable: true, value: undefined })
    window.dispatchEvent(event)
    expect(preventDefault).toHaveBeenCalled()
    expect(event.returnValue).toBe('')

    unmount()
    expect(removeListener).toHaveBeenCalledWith('beforeunload', expect.any(Function))

    addListener.mockRestore()
    removeListener.mockRestore()
  })

  it('auto submits the exam when the timer expires', async () => {
    mocks.mode = 'EXAM'
    const shortExam = { ...mocks.exam, duration_minutes: 0.001 }
    const insertHandler = vi.fn().mockResolvedValue({ data: { id: 'attempt-timeout' }, error: null })
    setupSupabase({ examData: shortExam, insertHandler })

    render(<ExamPage />)

    await waitFor(() => {
      expect(screen.getByText('Test Exam')).toBeInTheDocument()
    })

    await waitFor(() => {
      expect(insertHandler).toHaveBeenCalled()
    }, { timeout: 5000 })
  })

  it('closes the sidebar when the mobile backdrop is clicked', async () => {
    const previousWidth = window.innerWidth
    window.innerWidth = 375
    setupSupabase()

    try {
      render(<ExamPage />)

      await waitFor(() => {
        expect(screen.getByText('Question 1')).toBeInTheDocument()
      })

      const toggleButton = screen.getByLabelText('Toggle sidebar')
      fireEvent.click(toggleButton)

      const backdrop = await screen.findByTestId('sidebar-backdrop')
      fireEvent.click(backdrop)

      await waitFor(() => {
        expect(screen.queryByTestId('sidebar-backdrop')).not.toBeInTheDocument()
      })
    } finally {
      window.innerWidth = previousWidth
    }
  })

  it('shows the submit warning modal before finishing an exam', async () => {
    mocks.mode = 'EXAM'
    const insertHandler = vi.fn().mockResolvedValue({ data: { id: 'attempt-modal' }, error: null })
    setupSupabase({ insertHandler })

    render(<ExamPage />)

    await waitFor(() => {
      expect(screen.getByText('Question 1')).toBeInTheDocument()
    })

    const nextButton = screen.getByRole('button', { name: /next/i })
    fireEvent.click(nextButton)
    fireEvent.click(nextButton)
    fireEvent.click(nextButton)

    const finishButton = screen.getByTestId('finish-exam-button')
    fireEvent.click(finishButton)

    expect(await screen.findByText('Submit Exam?')).toBeInTheDocument()

    const overlay = screen.getByTestId('submit-warning-overlay')
    fireEvent.click(overlay)

    await waitFor(() => {
      expect(screen.queryByText('Submit Exam?')).not.toBeInTheDocument()
    })

    fireEvent.click(finishButton)
    expect(await screen.findByText('Submit Exam?')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /^Cancel$/i }))
    await waitFor(() => {
      expect(screen.queryByText('Submit Exam?')).not.toBeInTheDocument()
    })

    fireEvent.click(finishButton)
    expect(await screen.findByText('Submit Exam?')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /Confirm Submit/i }))

    await waitFor(() => {
      expect(insertHandler).toHaveBeenCalled()
    })
  })

  it('opens the AI response modal and copies context', async () => {
    render(<ExamPage />)

    await waitFor(() => {
      expect(screen.getByText('Question 1')).toBeInTheDocument()
    })

    fireEvent.click(screen.getByText('AI Help'))

    await waitFor(() => {
      expect(screen.getByText('Mock AI Response')).toBeInTheDocument()
    })

    const copyButton = screen.getByRole('button', { name: /Copy Context/i })
    await userEvent.click(copyButton)

    await waitFor(() => {
      expect(clipboardMock.writeText).toHaveBeenCalledWith(expect.stringContaining('Question:'))
      expect(screen.getByText('Copied!')).toBeInTheDocument()
    })

    fireEvent.click(screen.getByText('Grok'))
    expect(windowOpenSpy).toHaveBeenCalledWith('https://grok.com', '_blank')

    fireEvent.click(screen.getByRole('button', { name: /ChatGPT/i }))
    expect(windowOpenSpy).toHaveBeenCalledWith('https://chat.openai.com', '_blank')

    fireEvent.click(screen.getByTestId('ai-response-overlay'))

    await waitFor(() => {
      expect(screen.queryByText('Mock AI Response')).not.toBeInTheDocument()
    })

    fireEvent.click(screen.getByText('AI Help'))
    await waitFor(() => {
      expect(screen.getByText('Mock AI Response')).toBeInTheDocument()
    })

    fireEvent.click(screen.getByRole('button', { name: /^Close$/i }))

    await waitFor(() => {
      expect(screen.queryByText('Mock AI Response')).not.toBeInTheDocument()
    })
  })

  it('scores multi-select answers correctly', async () => {
    const multiSelectQuestion = [
      {
        id: 'multi-1',
        content: 'Select all correct options',
        question_type: 'MULTI_SELECT',
        options: ['Option A', 'Option B', 'Option C'],
        correct_answer: ['Option A', 'Option C'],
        points: 2,
      },
    ] as typeof mocks.questions
    const insertHandler = vi.fn().mockResolvedValue({ data: { id: 'attempt-multi' }, error: null })
    setupSupabase({ questionsData: multiSelectQuestion, insertHandler })

    render(<ExamPage />)

    await waitFor(() => {
      expect(screen.getByText('Select all correct options')).toBeInTheDocument()
    })

    const optionA = screen.getByText('Option A')
    const optionC = screen.getByText('Option C')
    fireEvent.click(optionA)
    fireEvent.click(optionC)
    fireEvent.click(optionC) // unselect
    fireEvent.click(optionC) // reselect

    const finishButton = screen.getByTestId('finish-exam-button')
    fireEvent.click(finishButton)

    await waitFor(() => {
      expect(insertHandler).toHaveBeenCalled()
    })

    const payload = insertHandler.mock.calls[0][0] as { score: number }
    expect(payload.score).toBe(2)
  })

  it('awards points for object-based answers when they match', async () => {
    const matchingOnly = [
      {
        id: 'match-obj',
        content: 'Match the elements to their symbols',
        question_type: 'MATCHING',
        options: [
          { left: 'Hydrogen', right: 'H' },
          { left: 'Oxygen', right: 'O' },
        ],
        correct_answer: { Hydrogen: 'H', Oxygen: 'O' },
        points: 4,
      },
    ]
    const insertHandler = vi.fn().mockResolvedValue({ data: { id: 'attempt-objects' }, error: null })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setupSupabase({ questionsData: matchingOnly as any, insertHandler })

    render(<ExamPage />)

    await waitFor(() => {
      expect(screen.getByText(/Match the elements/i)).toBeInTheDocument()
    })

    const selectPair = (leftLabel: string, rightLabel: string) => {
      fireEvent.click(screen.getByText(leftLabel))
      const rightButton = screen
        .getAllByText(rightLabel)
        .find((el) => el instanceof HTMLElement && el.className.includes('cursor-pointer')) as HTMLElement | undefined
      if (!rightButton) throw new Error('Right option not found')
      fireEvent.click(rightButton)
    }

    selectPair('Hydrogen', 'H')
    selectPair('Oxygen', 'O')

    fireEvent.click(screen.getByTestId('finish-exam-button'))

    await waitFor(() => {
      expect(insertHandler).toHaveBeenCalled()
    })

    const objectQuestion = [
      {
        id: 'match-obj',
        content: 'Match Elements',
        question_type: 'MATCHING',
        options: [
          { left: 'Hydrogen', right: 'H' },
          { left: 'Oxygen', right: 'O' }
        ],
        correct_answer: { Hydrogen: 'H', Oxygen: 'O' },
        points: 4,
      }
    ]
    const objectInsertHandler = vi.fn().mockResolvedValue({ data: { id: 'attempt-obj' }, error: null })
    const userAnswersHandler = vi.fn().mockResolvedValue({ data: null, error: null })
    setupSupabase({ questionsData: objectQuestion as unknown as Question[], insertHandler: objectInsertHandler, userAnswersHandler })

    render(<ExamPage />)

    await waitFor(() => {
      expect(screen.getByText('Match Elements')).toBeInTheDocument()
    })

    // Simulate answering
    // For matching, we click left then right.
    // Click Hydrogen
    fireEvent.click(screen.getAllByText('Hydrogen')[0])
    // Click H
    // H might be in a button or div.
    const hOption = screen.getAllByText('H').find(el => el.className.includes('cursor-pointer'))
    if (hOption) fireEvent.click(hOption)
    
    // Click Oxygen
    fireEvent.click(screen.getAllByText('Oxygen')[0])
    // Click O
    const oOption = screen.getAllByText('O').find(el => el.className.includes('cursor-pointer'))
    if (oOption) fireEvent.click(oOption)

    // Submit
    const finishButton = screen.getAllByTestId('finish-exam-button')[0]
    fireEvent.click(finishButton)

    await waitFor(() => {
      expect(insertHandler).toHaveBeenCalled()
      // Check payload of userAnswersHandler
      const answersPayload = userAnswersHandler.mock.calls[0][0] as UserAnswer[]
      const answer = answersPayload.find(a => a.question_id === 'match-obj')
      expect(answer?.user_answer).toEqual({ Hydrogen: 'H', Oxygen: 'O' })
      expect(answer?.points_earned).toBe(4)
    })
  })
  it('warns when no question data is returned', async () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    setupSupabase({ questionsData: null })

    render(<ExamPage />)

    await waitFor(() => {
      expect(warnSpy).toHaveBeenCalledWith('No questions data returned for exam:', 'exam-123')
    })

    warnSpy.mockRestore()
  })

  it('logs an error when exam fetching fails', async () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    const failingExamPromise = Promise.reject(new Error('fetch failed')) as unknown as Promise<{ data: unknown; error: unknown }>
    ;(failingExamPromise as Promise<unknown>).catch(() => {})
    setupSupabase({ examPromise: failingExamPromise })

    render(<ExamPage />)

    await waitFor(() => {
      expect(errorSpy).toHaveBeenCalledWith('Error fetching exam:', expect.any(Error))
    })

    errorSpy.mockRestore()
  })

  it('renders order sequence question gracefully when options are missing', async () => {
    const brokenQuestion = [
      {
        id: 'broken-order',
        content: 'Broken Order',
        question_type: 'ORDER_SEQUENCE',
        // options missing
        correct_answer: ['A', 'B'],
        points: 1,
      },
    ] as unknown as typeof mocks.questions
    setupSupabase({ questionsData: brokenQuestion })

    render(<ExamPage />)

    await waitFor(() => {
      expect(screen.getByText('Broken Order')).toBeInTheDocument()
    })
    
    const listItems = screen.queryAllByTestId('order-item-label')
    expect(listItems).toHaveLength(0)
  })

  it('prevents reordering when answer is shown', async () => {
    const user = userEvent.setup()
    const orderQuestion = [
      {
        id: 'order-1',
        content: 'Order Items',
        question_type: 'ORDER_SEQUENCE',
        options: ['A', 'B'],
        correct_answer: ['A', 'B'],
        points: 1,
      },
    ]
    setupSupabase({ questionsData: orderQuestion })

    render(<ExamPage />)

    await waitFor(() => {
      expect(screen.getByText('Order Items')).toBeInTheDocument()
    })

    // Show Answer
    await user.click(screen.getByRole('button', { name: /Show Answer/i }))
    
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /Hide Answer/i })).toBeInTheDocument()
    })

    // Get current order
    const labels = screen.getAllByTestId('order-item-label')
    const firstLabel = labels[0].textContent
    const secondLabel = labels[1].textContent

    // Try to move the first item down
    const moveDownBtn = screen.getByRole('button', { name: new RegExp(`Move ${firstLabel} down`, 'i') })
    
    // It should be disabled
    expect(moveDownBtn).toBeDisabled()
    
    // Force click
    await user.click(moveDownBtn)

    // Order should not change
    const newLabels = screen.getAllByTestId('order-item-label')
    expect(newLabels[0]).toHaveTextContent(firstLabel!)
    expect(newLabels[1]).toHaveTextContent(secondLabel!)
  })
})
