import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { AIHelpButton } from './ai-help-button'
import { vi } from 'vitest'

describe('AIHelpButton', () => {
  const mockQuestion = 'What is chirality?'
  const mockImage = '/test-image.png'

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders correctly', () => {
    render(<AIHelpButton questionText={mockQuestion} />)
    expect(screen.getByText('Ask AI')).toBeInTheDocument()
  })

  it('copies text and opens new tab on click', async () => {
    render(<AIHelpButton questionText={mockQuestion} imageUrl={mockImage} />)
    
    const button = screen.getByText('Ask AI')
    fireEvent.click(button)

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
        expect.stringContaining(mockQuestion)
      )
      expect(window.open).toHaveBeenCalledWith(
        expect.stringContaining('https://chatgpt.com/'),
        '_blank'
      )
    })
  })

  it('handles missing image gracefully', async () => {
    render(<AIHelpButton questionText={mockQuestion} />)
    
    const button = screen.getByText('Ask AI')
    fireEvent.click(button)

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
        expect.not.stringContaining('[Image:')
      )
    })
  })

  it('handles errors during copy/open', async () => {
    // Mock console.error to keep output clean
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    // Mock alert
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})
    
    // Force error
    vi.mocked(navigator.clipboard.writeText).mockRejectedValueOnce(new Error('Clipboard error'))

    render(<AIHelpButton questionText={mockQuestion} />)
    
    const button = screen.getByText('Ask AI')
    fireEvent.click(button)

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalled()
      expect(alertSpy).toHaveBeenCalledWith('Something went wrong. Please try manually copying the question.')
    })
    
    consoleSpy.mockRestore()
    alertSpy.mockRestore()
  })
})
