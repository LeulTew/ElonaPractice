/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MCQQuestion } from './mcq-question'
import { TrueFalseQuestion } from './true-false-question'
import { FillBlankQuestion } from './fill-blank-question'
import { MatchingQuestion } from './matching-question'

// Mock Image component
vi.mock('next/image', () => ({
  default: (props: any) => <img {...props} />
}))

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, whileHover, whileTap, initial, animate, exit, transition, ...props }: any) => <div {...props}>{children}</div>,
    button: ({ children, whileHover, whileTap, initial, animate, exit, transition, ...props }: any) => <button {...props}>{children}</button>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>
}))

describe('Question Components', () => {
  describe('MCQQuestion', () => {
    const mockQuestion = {
      id: '1',
      content: 'What is the capital of France?',
      options: ['London', 'Berlin', 'Paris', 'Madrid'],
      correct_answer: 'Paris',
      hint: 'It starts with P'
    }

    it('renders question content and options', () => {
      render(
        <MCQQuestion 
          question={mockQuestion} 
          mode="PRACTICE" 
          onAnswer={() => {}} 
        />
      )
      
      expect(screen.getByText('What is the capital of France?')).toBeInTheDocument()
      mockQuestion.options.forEach(option => {
        expect(screen.getByText(option)).toBeInTheDocument()
      })
    })

    it('handles answer selection and submission', () => {
      const onAnswer = vi.fn()
      render(
        <MCQQuestion 
          question={mockQuestion} 
          mode="PRACTICE" 
          onAnswer={onAnswer} 
        />
      )

      // Select option
      fireEvent.click(screen.getByText('Paris'))
      
      const submitButton = screen.getByRole('button', { name: /Submit Answer/i })
      fireEvent.click(submitButton)

      expect(onAnswer).toHaveBeenCalledWith('Paris', true)
    })

    it('shows hint in practice mode', () => {
      render(
        <MCQQuestion 
          question={mockQuestion} 
          mode="PRACTICE" 
          onAnswer={() => {}} 
        />
      )

      const hintButton = screen.getByRole('button', { name: /Show Hint/i })
      fireEvent.click(hintButton)
      expect(screen.getByText('It starts with P')).toBeInTheDocument()
    })

    it('highlights correct answers in practice mode after submission', () => {
      const onAnswer = vi.fn()
      render(
        <MCQQuestion
          question={mockQuestion}
          mode="PRACTICE"
          onAnswer={onAnswer}
        />
      )

      fireEvent.click(screen.getByText('Berlin'))
      fireEvent.click(screen.getByRole('button', { name: /Submit Answer/i }))

      const correctButton = screen.getByRole('button', { name: /Paris/i })
      const incorrectButton = screen.getByRole('button', { name: /Berlin/i })

      expect(correctButton.className).toContain('bg-green-50')
      expect(incorrectButton.className).toContain('bg-red-50')
      expect(onAnswer).toHaveBeenCalledWith('Berlin', false)
    })

    it('disables option selection after submission in exam mode', () => {
      render(
        <MCQQuestion
          question={mockQuestion}
          mode="EXAM"
          onAnswer={() => {}}
        />
      )

      fireEvent.click(screen.getByText('Paris'))
      fireEvent.click(screen.getByRole('button', { name: /Submit Answer/i }))

      const optionButton = screen.getByRole('button', { name: /Berlin/i })
      expect(optionButton).toBeDisabled()
    })

    it('does not change selection when clicked after submission in exam mode', () => {
      render(
        <MCQQuestion
          question={mockQuestion}
          mode="EXAM"
          onAnswer={() => {}}
        />
      )

      // Select Paris and submit
      fireEvent.click(screen.getByText('Paris'))
      fireEvent.click(screen.getByRole('button', { name: /Submit Answer/i }))

      // Try to select Berlin
      const berlinButton = screen.getByRole('button', { name: /Berlin/i })
      fireEvent.click(berlinButton)

      // Paris should still be selected (checked by class or other means)
      // In this component, selected option has specific styling.
      // We can check if Berlin became selected.
      // If selected, it would have 'bg-amber-50' or similar if not submitted, 
      // but since it is submitted, it might have different classes.
      // However, since we are in EXAM mode, if we could change selection, 
      // the UI might not update to show correctness immediately, but the internal state would change.
      // Actually, in EXAM mode, after submission, the UI doesn't show correctness (green/red) until the end?
      // Wait, let's check the component.
      
      // In EXAM mode, `showCorrect` is false (line 64: `const showCorrect = submitted && mode === 'PRACTICE'`).
      // So `isSelected` determines the class.
      // If `isSelected` is true, it uses `bg-amber-50` (line 79).
      // So if we successfully changed selection to Berlin, Berlin would have `bg-amber-50`.
      
      expect(berlinButton.className).not.toContain('bg-amber-50')
      expect(berlinButton.className).toContain('bg-white') // Default
    })

    it('does not submit when no answer selected', () => {
      const onAnswer = vi.fn()
      render(
        <MCQQuestion
          question={mockQuestion}
          mode="PRACTICE"
          onAnswer={onAnswer}
        />
      )

      const submitButton = screen.getByRole('button', { name: /Submit Answer/i })
      // Button is disabled, but we force click to test the guard
      fireEvent.click(submitButton)

      expect(onAnswer).not.toHaveBeenCalled()
    })

    it('renders the question image when provided', () => {
      render(
        <MCQQuestion
          question={{ ...mockQuestion, image_url: 'https://example.com/q.png' }}
          mode="PRACTICE"
          onAnswer={() => {}}
        />
      )

      expect(screen.getByAltText('Question diagram')).toBeInTheDocument()
    })
  })

  describe('TrueFalseQuestion', () => {
    const mockQuestion = {
      id: '2',
      content: 'The earth is flat.',
      correct_answer: false,
      hint: 'Look at a globe',
      explanation: 'Look at a globe'
    }

    it('renders question and True/False options', () => {
      render(
        <TrueFalseQuestion 
          question={mockQuestion} 
          mode="PRACTICE" 
          onAnswer={() => {}} 
        />
      )

      expect(screen.getByText('The earth is flat.')).toBeInTheDocument()
      expect(screen.getByText('TRUE')).toBeInTheDocument()
      expect(screen.getByText('FALSE')).toBeInTheDocument()
    })

    it('handles correct answer selection', () => {
      const onAnswer = vi.fn()
      render(
        <TrueFalseQuestion 
          question={mockQuestion} 
          mode="PRACTICE" 
          onAnswer={onAnswer} 
        />
      )

      fireEvent.click(screen.getByText('FALSE'))
      const submitButton = screen.getByRole('button', { name: /Submit Answer/i })
      fireEvent.click(submitButton)

      expect(onAnswer).toHaveBeenCalledWith(false, true)
    })

    it('shows explanation after submitting in practice mode', () => {
      render(
        <TrueFalseQuestion
          question={mockQuestion}
          mode="PRACTICE"
          onAnswer={() => {}}
        />
      )

      fireEvent.click(screen.getByText('TRUE'))
      fireEvent.click(screen.getByRole('button', { name: /Submit Answer/i }))

      expect(screen.getByText('Explanation:')).toBeInTheDocument()
      expect(screen.getByText('Look at a globe')).toBeInTheDocument()
    })

    it('does not show explanation in exam mode', () => {
      render(
        <TrueFalseQuestion
          question={mockQuestion}
          mode="EXAM"
          onAnswer={() => {}}
        />
      )

      fireEvent.click(screen.getByText('TRUE'))
      fireEvent.click(screen.getByRole('button', { name: /Submit Answer/i }))

      expect(screen.queryByText('Explanation:')).not.toBeInTheDocument()
    })

    it('prevents changing the answer after submission in practice mode', () => {
      render(
        <TrueFalseQuestion
          question={mockQuestion}
          mode="PRACTICE"
          onAnswer={() => {}}
        />
      )

      const trueButton = screen.getByText('TRUE').closest('button') as HTMLButtonElement
      fireEvent.click(trueButton)
      fireEvent.click(screen.getByRole('button', { name: /Submit Answer/i }))

      fireEvent.click(screen.getByText('FALSE'))

      expect(trueButton.className).toContain('border-red-500')
    })
  })

  describe('FillBlankQuestion', () => {
    const mockQuestion = {
      id: '3',
      content: 'The capital of Japan is ___.',
      correct_answer: 'Tokyo',
      hint: 'It starts with T'
    }

    it('renders question with input', () => {
      render(
        <FillBlankQuestion 
          question={mockQuestion} 
          mode="PRACTICE" 
          onAnswer={() => {}} 
        />
      )

      expect(screen.getByText('The capital of Japan is')).toBeInTheDocument()
      expect(screen.getByRole('textbox')).toBeInTheDocument()
    })

    it('handles answer input and submission', () => {
      const onAnswer = vi.fn()
      render(
        <FillBlankQuestion 
          question={mockQuestion} 
          mode="PRACTICE" 
          onAnswer={onAnswer} 
        />
      )

      const input = screen.getByRole('textbox')
      fireEvent.change(input, { target: { value: 'Tokyo' } })
      
      const submitButton = screen.getByRole('button', { name: /Submit Answer/i })
      fireEvent.click(submitButton)

      expect(onAnswer).toHaveBeenCalledWith('Tokyo', true)
    })

    it('handles case insensitive matching', () => {
      const onAnswer = vi.fn()
      render(
        <FillBlankQuestion 
          question={mockQuestion} 
          mode="PRACTICE" 
          onAnswer={onAnswer} 
        />
      )

      const input = screen.getByRole('textbox')
      fireEvent.change(input, { target: { value: 'tokyo' } })
      
      const submitButton = screen.getByRole('button', { name: /Submit Answer/i })
      fireEvent.click(submitButton)

      expect(onAnswer).toHaveBeenCalledWith('tokyo', true)
    })

    it('shows incorrect feedback with the correct answer', () => {
      render(
        <FillBlankQuestion
          question={mockQuestion}
          mode="PRACTICE"
          onAnswer={() => {}}
        />
      )

      const input = screen.getByRole('textbox')
      fireEvent.change(input, { target: { value: 'Osaka' } })
      fireEvent.click(screen.getByRole('button', { name: /Submit Answer/i }))

      expect(screen.getByText(/Incorrect\./i)).toHaveTextContent('Tokyo')
      expect(input).toHaveClass('border-red-500')
    })

    it('reveals hint text and image when available', () => {
      render(
        <FillBlankQuestion
          question={{ ...mockQuestion, image_url: 'https://example.com/hint.png' }}
          mode="PRACTICE"
          onAnswer={() => {}}
        />
      )

      fireEvent.click(screen.getByRole('button', { name: /Show Hint/i }))

      expect(screen.getByText('It starts with T')).toBeInTheDocument()
      expect(screen.getByAltText('Question diagram')).toBeInTheDocument()
    })

    it('does not submit when answer is empty', () => {
      const onAnswer = vi.fn()
      render(
        <FillBlankQuestion
          question={mockQuestion}
          mode="PRACTICE"
          onAnswer={onAnswer}
        />
      )

      const submitButton = screen.getByRole('button', { name: /Submit Answer/i })
      // Button is disabled, but force click
      fireEvent.click(submitButton)

      expect(onAnswer).not.toHaveBeenCalled()
    })
  })

  describe('MatchingQuestion', () => {
    const mockQuestion = {
      id: '4',
      content: 'Match the countries to their capitals.',
      metadata: {
        pairs: [
          { left: 'France', right: 'Paris' },
          { left: 'Japan', right: 'Tokyo' }
        ]
      }
    }

    it('renders matching pairs', () => {
      render(
        <MatchingQuestion 
          question={mockQuestion} 
          mode="PRACTICE" 
          onAnswer={() => {}} 
        />
      )

      expect(screen.getByText('France')).toBeInTheDocument()
      expect(screen.getByText('Paris')).toBeInTheDocument()
      expect(screen.getByText('Japan')).toBeInTheDocument()
      expect(screen.getByText('Tokyo')).toBeInTheDocument()
    })

    it('handles pair selection and submission', () => {
      const onAnswer = vi.fn()
      render(
        <MatchingQuestion 
          question={mockQuestion} 
          mode="PRACTICE" 
          onAnswer={onAnswer} 
        />
      )

      // Click France (left) then Paris (right)
      fireEvent.click(screen.getByText('France'))
      fireEvent.click(screen.getByText('Paris'))

      // Click Japan (left) then Tokyo (right)
      fireEvent.click(screen.getByText('Japan'))
      fireEvent.click(screen.getByText('Tokyo'))

      const submitButton = screen.getByRole('button', { name: /Submit Answer/i })
      fireEvent.click(submitButton)

      expect(onAnswer).toHaveBeenCalledWith({
        'France': 'Paris',
        'Japan': 'Tokyo'
      }, true)
    })

    it('allows unmatching before submission and disables submit until complete', () => {
      render(
        <MatchingQuestion
          question={mockQuestion}
          mode="PRACTICE"
          onAnswer={() => {}}
        />
      )

      const submitButton = screen.getByRole('button', { name: /Submit Answer/i })
      expect(submitButton).toBeDisabled()

      fireEvent.click(screen.getByText('France'))
      fireEvent.click(screen.getByText('Paris'))
      fireEvent.click(screen.getByText('Japan'))
      fireEvent.click(screen.getByText('Tokyo'))

      expect(submitButton).toBeEnabled()

      fireEvent.click(screen.getByText('France'))
      expect(submitButton).toBeDisabled()
    })

    it('prevents editing matches after submission in practice mode', () => {
      render(
        <MatchingQuestion
          question={mockQuestion}
          mode="PRACTICE"
          onAnswer={() => {}}
        />
      )

      fireEvent.click(screen.getByText('France'))
      fireEvent.click(screen.getByText('Paris'))
      fireEvent.click(screen.getByText('Japan'))
      fireEvent.click(screen.getByText('Tokyo'))

      fireEvent.click(screen.getByRole('button', { name: /Submit Answer/i }))

      const franceButton = screen.getByText('France')
      fireEvent.click(franceButton)

      expect(franceButton.className).toContain('border-green-500')
      expect(screen.queryByRole('button', { name: /Submit Answer/i })).not.toBeInTheDocument()
    })

    it('highlights incorrect right pairs after submission', () => {
      render(
        <MatchingQuestion
          question={mockQuestion}
          mode="PRACTICE"
          onAnswer={() => {}}
        />
      )

      fireEvent.click(screen.getByText('France'))
      fireEvent.click(screen.getByText('Tokyo'))
      fireEvent.click(screen.getByText('Japan'))
      fireEvent.click(screen.getByText('Paris'))

      fireEvent.click(screen.getByRole('button', { name: /Submit Answer/i }))

      expect(screen.getByText('Paris').className).toContain('border-red-500')
      expect(screen.getByText('Tokyo').className).toContain('border-red-500')
    })

    it('does not match when right item clicked without left selection', () => {
      render(
        <MatchingQuestion
          question={mockQuestion}
          mode="PRACTICE"
          onAnswer={() => {}}
        />
      )

      fireEvent.click(screen.getByText('Paris'))
      // Should not be matched (no visual indication of match on Paris alone, usually)
      // We can check internal state if we could, but here we can check if it allows submitting (it shouldn't)
      expect(screen.getByRole('button', { name: /Submit Answer/i })).toBeDisabled()
    })

    it('does not match when right item is already matched', () => {
      render(
        <MatchingQuestion
          question={mockQuestion}
          mode="PRACTICE"
          onAnswer={() => {}}
        />
      )

      // Match France -> Paris
      fireEvent.click(screen.getByText('France'))
      fireEvent.click(screen.getByText('Paris'))

      // Try to match Japan -> Paris
      fireEvent.click(screen.getByText('Japan'))
      fireEvent.click(screen.getByText('Paris'))

      // Paris should still be matched to France (implied by not changing)
      // If it changed, Japan would be matched.
      // We can check if Japan is selected (it should still be selected as left item because match failed?)
      // Actually, if match fails, selectedLeft remains 'Japan'.
      // The component doesn't clear selectedLeft if match fails.
      // So Japan should be highlighted as selected.
      expect(screen.getByText('Japan').className).toContain('border-primary')
    })

    it('renders gracefully without metadata', () => {
      const brokenQuestion = {
        id: '5',
        content: 'Broken Matching',
        // metadata missing
      } as any

      render(
        <MatchingQuestion
          question={brokenQuestion}
          mode="PRACTICE"
          onAnswer={() => {}}
        />
      )

      expect(screen.getByText('Broken Matching')).toBeInTheDocument()
    })
  })
})
