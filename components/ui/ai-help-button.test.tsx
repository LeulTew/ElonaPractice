/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { AIHelpButton } from './ai-help-button'
import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock fetch
global.fetch = vi.fn()

// Mock navigator.clipboard
Object.assign(navigator, {
  clipboard: {
    writeText: vi.fn(),
  },
})

// Mock window.open
Object.assign(window, { open: vi.fn() })

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

// Mock lucide-react icons
vi.mock('lucide-react', () => ({
  Bot: () => <svg data-testid="bot-icon" />,
  X: () => <svg data-testid="x-icon" />,
  Sparkles: () => <svg data-testid="sparkles-icon" />,
  Loader2: () => <svg data-testid="loader-icon" />,
  ExternalLink: () => <svg data-testid="external-link-icon" />,
  Copy: () => <svg data-testid="copy-icon" />,
  Check: () => <svg data-testid="check-icon" />,
}))

describe('AIHelpButton', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the button initially', () => {
    render(<AIHelpButton questionId="q1" questionText="Test Question" />)
    expect(screen.getByText('Ask AI')).toBeInTheDocument()
  })

  it('opens the modal and auto-fetches hint', async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: 'This is an AI hint' }),
    })

    render(<AIHelpButton questionId="q1" questionText="Test Question" />)
    
    fireEvent.click(screen.getByText('Ask AI'))
    
    expect(screen.getByText('AI Assistant')).toBeInTheDocument()
    expect(screen.getByText('Elona AI')).toBeInTheDocument()
    
    // Should show loading initially (might be too fast to catch in some envs, but let's try)
    // or we just wait for the result
    await waitFor(() => {
      expect(screen.getByText('This is an AI hint')).toBeInTheDocument()
    })
    
    expect(global.fetch).toHaveBeenCalledTimes(1)
  })

  it('handles API error gracefully', async () => {
    (global.fetch as any).mockRejectedValueOnce(new Error('API Error'))

    render(<AIHelpButton questionId="q1" questionText="Test Question" />)
    
    fireEvent.click(screen.getByText('Ask AI'))
    
    await waitFor(() => {
      expect(screen.getByText('Failed to get AI help. Please try external models.')).toBeInTheDocument()
    })
  })

  it('copies prompt to clipboard', async () => {
    render(<AIHelpButton questionId="q1" questionText="Test Question" />)
    
    fireEvent.click(screen.getByText('Ask AI'))
    
    const copyBtn = screen.getByText('Copy Prompt Only')
    fireEvent.click(copyBtn)
    
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(expect.stringContaining('Test Question'))
    
    await waitFor(() => {
      expect(screen.getByText('Copied!')).toBeInTheDocument()
    })
  })

  it('opens external links', async () => {
    render(<AIHelpButton questionId="q1" questionText="Test Question" />)
    
    fireEvent.click(screen.getByText('Ask AI'))
    
    const chatGPTBtn = screen.getByText('ChatGPT')
    fireEvent.click(chatGPTBtn)
    
    await waitFor(() => {
      expect(window.open).toHaveBeenCalledWith(
        expect.stringContaining('https://chatgpt.com/?q='),
        '_blank'
      )
    })
    
    // Should also copy to clipboard
    expect(navigator.clipboard.writeText).toHaveBeenCalled()
  })

  it('generates prompt with options and image', async () => {
    render(
      <AIHelpButton 
        questionId="q1" 
        questionText="Test Question" 
        options={['A', 'B']} 
        imageUrl="http://example.com/img.png"
        userAnswer="A"
      />
    )
    
    fireEvent.click(screen.getByText('Ask AI'))
    
    const copyBtn = screen.getByText('Copy Prompt Only')
    fireEvent.click(copyBtn)
    
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(expect.stringContaining('Options: A, B'))
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(expect.stringContaining('Image URL: http://example.com/img.png'))
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(expect.stringContaining('My Answer: "A"'))
  })

  it('handles clipboard error gracefully', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})
    
    // Mock clipboard failure
    ;(navigator.clipboard.writeText as any).mockRejectedValueOnce(new Error('Clipboard Error'))
    
    render(<AIHelpButton questionId="q1" questionText="Test Question" />)
    
    fireEvent.click(screen.getByText('Ask AI'))
    
    const copyBtn = screen.getByText('Copy Prompt Only')
    fireEvent.click(copyBtn)
    
    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith('Failed to copy:', expect.any(Error))
      expect(alertSpy).toHaveBeenCalledWith('Failed to copy to clipboard. Please try again.')
    })
    
    consoleSpy.mockRestore()
    alertSpy.mockRestore()
  })

  it('triggers onAIResponse callback after a successful fetch', async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: 'Callback message' }),
    })
    const onAIResponse = vi.fn()

    render(<AIHelpButton questionId="q1" questionText="Callback Question" onAIResponse={onAIResponse} />)

    fireEvent.click(screen.getByText('Ask AI'))

    await waitFor(() => {
      expect(screen.getByText('Callback message')).toBeInTheDocument()
    })

    expect(onAIResponse).toHaveBeenCalledWith('Callback message')
  })

  it('does not refetch when the AI response is already cached', async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: 'Initial hint' }),
    })

    render(<AIHelpButton questionId="q1" questionText="Test Question" />)

    fireEvent.click(screen.getByText('Ask AI'))

    await waitFor(() => {
      expect(screen.getByText('Initial hint')).toBeInTheDocument()
    })

    ;(global.fetch as any).mockClear()
    fireEvent.click(screen.getByText('Ask AI'))

    expect(global.fetch).not.toHaveBeenCalled()
  })

  it('opens external models without query params when not requested', async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: 'External ready' }),
    })

    render(<AIHelpButton questionId="q1" questionText="Test Question" />)

    fireEvent.click(screen.getByText('Ask AI'))

    await waitFor(() => {
      expect(screen.getByText('External ready')).toBeInTheDocument()
    })

    const grokButton = screen.getByText('Grok')
    fireEvent.click(grokButton)

    await waitFor(() => {
      expect(window.open).toHaveBeenCalledWith('https://grok.com/', '_blank')
    })
    expect(navigator.clipboard.writeText).toHaveBeenCalled()
  })

  it('still opens external AI when clipboard copy fails', async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: 'External fallback' }),
    })
    const clipboardSpy = vi.spyOn(navigator.clipboard, 'writeText').mockRejectedValueOnce(new Error('clip fail'))
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    render(<AIHelpButton questionId="q1" questionText="Test Question" />)

    fireEvent.click(screen.getByText('Ask AI'))

    await waitFor(() => {
      expect(screen.getByText('External fallback')).toBeInTheDocument()
    })

    const geminiButton = screen.getByText('Gemini')
    fireEvent.click(geminiButton)

    await waitFor(() => {
      expect(window.open).toHaveBeenCalledWith('https://gemini.google.com/', '_blank')
    })
    expect(warnSpy).toHaveBeenCalledWith('Clipboard copy failed:', expect.any(Error))

    clipboardSpy.mockRestore()
    warnSpy.mockRestore()
  })

  it('logs an error when external AI cannot be opened', async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: 'Ready for failure case' }),
    })
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => {
      throw new Error('window blocked')
    })

    render(<AIHelpButton questionId="q1" questionText="Test Question" />)

    fireEvent.click(screen.getByText('Ask AI'))

    await waitFor(() => {
      expect(screen.getByText('Ready for failure case')).toBeInTheDocument()
    })

    fireEvent.click(screen.getByText('Grok'))

    await waitFor(() => {
      expect(errorSpy).toHaveBeenCalledWith('Failed to open external AI:', expect.any(Error))
    })

    openSpy.mockRestore()
    errorSpy.mockRestore()
  })
})

