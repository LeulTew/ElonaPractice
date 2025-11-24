import { render, screen } from '@testing-library/react'
import { AIHelpButton } from './ai-help-button'

describe('AIHelpButton (Real Implementation)', () => {
  const mockQuestion = 'What is chirality?'
  const mockImage = '/test-image.png'

  it('renders correctly', () => {
    render(<AIHelpButton questionText={mockQuestion} />)
    expect(screen.getByText('Ask AI')).toBeInTheDocument()
  })

  it('renders with image URL', () => {
    render(<AIHelpButton questionText={mockQuestion} imageUrl={mockImage} />)
    const button = screen.getByText('Ask AI')
    expect(button).toBeInTheDocument()
  })

  it('handles missing image gracefully', () => {
    render(<AIHelpButton questionText={mockQuestion} />)
    const button = screen.getByText('Ask AI')
    expect(button).toBeInTheDocument()
  })
})
