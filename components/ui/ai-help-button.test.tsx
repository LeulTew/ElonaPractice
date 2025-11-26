import { render, screen } from '@testing-library/react'
import { AIHelpButton } from './ai-help-button'

describe('AIHelpButton (Real Implementation)', () => {
  const mockQuestion = 'What is chirality?'
  const mockImage = '/test-image.png'

  it('renders correctly', () => {
    render(<AIHelpButton questionId="test-id" questionText={mockQuestion} imageUrl={mockImage} />)
    expect(screen.getByText('Ask AI')).toBeInTheDocument()
  })

  it('renders without image', () => {
    render(<AIHelpButton questionId="test-id" questionText={mockQuestion} />)
    expect(screen.getByText('Ask AI')).toBeInTheDocument()
  })

  it('handles missing image gracefully', () => {
    render(<AIHelpButton questionId="test-id" questionText={mockQuestion} />)
    const button = screen.getByText('Ask AI')
    expect(button).toBeInTheDocument()
  })
})
