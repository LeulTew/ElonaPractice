import { render, screen } from '@testing-library/react'
import { Progress } from './progress'
import { ScrollArea } from './scroll-area'
import { describe, it, expect } from 'vitest'

describe('Layout Components', () => {
  describe('Progress', () => {
    it('renders correctly with value', () => {
      render(<Progress value={50} />)
      const progressBar = screen.getByRole('progressbar')
      expect(progressBar).toBeInTheDocument()
      expect(progressBar).toHaveAttribute('aria-valuenow', '50')
    })

    it('renders with custom class', () => {
      render(<Progress value={30} className="custom-class" />)
      expect(screen.getByRole('progressbar')).toHaveClass('custom-class')
    })
  })

  describe('ScrollArea', () => {
    it('renders content correctly', () => {
      render(
        <ScrollArea className="h-20">
          <div>Scrollable Content</div>
        </ScrollArea>
      )
      expect(screen.getByText('Scrollable Content')).toBeInTheDocument()
    })

    it('renders with custom class', () => {
      render(
        <ScrollArea className="custom-class" data-testid="scroll-area">
          <div>Content</div>
        </ScrollArea>
      )
      expect(screen.getByTestId('scroll-area')).toHaveClass('custom-class')
    })
  })
})
