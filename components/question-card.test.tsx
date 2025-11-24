import { render, screen } from '@testing-library/react'
import { QuestionCard } from './question-card'

describe('QuestionCard', () => {
  const mockQuestion = {
    id: '123',
    content: 'Test Question Content',
    question_type: 'MCQ',
    options: ['Option A', 'Option B'],
    image_url: '/test-image.png'
  }

  it('renders question content', () => {
    render(<QuestionCard question={mockQuestion} courseName="Test Course" />)
    expect(screen.getByText('Test Question Content')).toBeInTheDocument()
    expect(screen.getByText('Test Course')).toBeInTheDocument()
    expect(screen.getByText('MCQ')).toBeInTheDocument()
  })

  it('renders options when provided', () => {
    render(<QuestionCard question={mockQuestion} />)
    expect(screen.getByText('Option A')).toBeInTheDocument()
    expect(screen.getByText('Option B')).toBeInTheDocument()
  })

  it('renders image when provided', () => {
    render(<QuestionCard question={mockQuestion} />)
    const img = screen.getByAltText('Question diagram')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('test-image.png'))
  })

  it('does not render options if missing', () => {
    const noOptionsQuestion = { ...mockQuestion, options: undefined }
    render(<QuestionCard question={noOptionsQuestion} />)
    expect(screen.queryByText('Option A')).not.toBeInTheDocument()
  })
})
