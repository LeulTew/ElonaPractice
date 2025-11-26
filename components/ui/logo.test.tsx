import { render, screen } from '@testing-library/react'
import { Logo } from './logo'
import { describe, it, expect } from 'vitest'

describe('Logo', () => {
  it('renders correctly', () => {
    render(<Logo />)
    expect(screen.getByText('Elona')).toBeInTheDocument()
    expect(screen.getByText('Practice')).toBeInTheDocument()
  })

  it('renders with custom class', () => {
    render(<Logo className="custom-class" />)
    const logo = screen.getByText('Elona').closest('div')
    expect(logo).toHaveClass('custom-class')
  })
})
