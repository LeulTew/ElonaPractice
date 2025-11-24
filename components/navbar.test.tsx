import { render, screen } from '@testing-library/react'
import { Navbar } from './navbar'
import { ThemeProvider } from './theme-provider'

describe('Navbar Integration', () => {
  it('renders title and navigation links', () => {
    render(
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <Navbar />
      </ThemeProvider>
    )
    expect(screen.getByText('ElonaPractice')).toBeInTheDocument()
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
