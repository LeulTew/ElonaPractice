import { render, screen } from '@testing-library/react'
import { Navbar } from './navbar'
import { ThemeProvider } from './theme-provider'
import { vi } from 'vitest'

// Mock next/navigation
vi.mock('next/navigation', () => ({
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}))

describe('Navbar Integration', () => {
  it('renders title and navigation links', () => {
    render(
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <Navbar />
      </ThemeProvider>
    )
    expect(screen.getByText('Elona')).toBeInTheDocument()
    expect(screen.getByText('Practice')).toBeInTheDocument()
    expect(screen.getByText('Courses')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('renders theme toggle', () => {
    render(
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <Navbar />
      </ThemeProvider>
    )
    expect(screen.getByRole('button', { name: /toggle theme/i })).toBeInTheDocument()
  })
})
