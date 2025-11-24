import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ModeToggle } from './mode-toggle'
import { ThemeProvider } from './theme-provider'

describe('ModeToggle Integration', () => {
  it('changes theme using real provider', async () => {
    const user = userEvent.setup()
    render(
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <ModeToggle />
      </ThemeProvider>
    )
    
    const button = screen.getByRole('button', { name: /toggle theme/i })
    expect(button).toBeInTheDocument()

    // Open dropdown
    await user.click(button)
    
    // Click Dark
    const darkOption = await screen.findByRole('menuitem', { name: /dark/i })
    await user.click(darkOption)

    // Check if html tag has class="dark"
    await waitFor(() => {
      expect(document.documentElement).toHaveClass('dark')
    })

    // Open dropdown again
    await user.click(button)

    // Click Light
    const lightOption = await screen.findByRole('menuitem', { name: /light/i })
    await user.click(lightOption)

    await waitFor(() => {
      expect(document.documentElement).not.toHaveClass('dark')
    })
  })
})
