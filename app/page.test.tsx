import { render, screen } from '@testing-library/react'
import Home from './page'
import { useRouter } from 'next/navigation'
import { vi, Mock } from 'vitest'

// Mock next/navigation
vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
}))

describe('Home Page', () => {
  it('redirects to dashboard', () => {
    const push = vi.fn()
    ;(useRouter as Mock).mockReturnValue({ push })

    render(<Home />)
    
    expect(screen.getByText('Redirecting to dashboard...')).toBeInTheDocument()
    expect(push).toHaveBeenCalledWith('/dashboard')
  })
})
