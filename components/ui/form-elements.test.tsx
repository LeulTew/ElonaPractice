import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from './input'
import { Textarea } from './textarea'
import { describe, it, expect, vi } from 'vitest'

describe('Form Elements', () => {
  describe('Input', () => {
    it('renders correctly', () => {
      render(<Input placeholder="Enter text" />)
      expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
    })

    it('handles change events', () => {
      const handleChange = vi.fn()
      render(<Input onChange={handleChange} />)
      const input = screen.getByRole('textbox')
      fireEvent.change(input, { target: { value: 'test' } })
      expect(handleChange).toHaveBeenCalled()
      expect(input).toHaveValue('test')
    })

    it('renders with custom class', () => {
      render(<Input className="custom-class" data-testid="input" />)
      expect(screen.getByTestId('input')).toHaveClass('custom-class')
    })

    it('forwards refs', () => {
      const ref = { current: null }
      render(<Input ref={ref} />)
      expect(ref.current).toBeInstanceOf(HTMLInputElement)
    })
  })

  describe('Textarea', () => {
    it('renders correctly', () => {
      render(<Textarea placeholder="Enter long text" />)
      expect(screen.getByPlaceholderText('Enter long text')).toBeInTheDocument()
    })

    it('handles change events', () => {
      const handleChange = vi.fn()
      render(<Textarea onChange={handleChange} />)
      const textarea = screen.getByRole('textbox')
      fireEvent.change(textarea, { target: { value: 'long text' } })
      expect(handleChange).toHaveBeenCalled()
      expect(textarea).toHaveValue('long text')
    })

    it('renders with custom class', () => {
      render(<Textarea className="custom-class" data-testid="textarea" />)
      expect(screen.getByTestId('textarea')).toHaveClass('custom-class')
    })

    it('forwards refs', () => {
      const ref = { current: null }
      render(<Textarea ref={ref} />)
      expect(ref.current).toBeInstanceOf(HTMLTextAreaElement)
    })
  })
})
