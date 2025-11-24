import { render, screen, fireEvent } from '@testing-library/react'
import Home from './page'

describe('Home Page Integration (Real Data)', () => {
  it('renders with real questions data', async () => {
    render(<Home />)
    
    // Should render the header
    expect(screen.getByText('Elona Exam Practice')).toBeInTheDocument()
    
    // Should show pagination controls
    expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
  })

  it('navigates between questions', () => {
    render(<Home />)
    
    const nextBtn = screen.getByRole('button', { name: /next/i })
    const prevBtn = screen.getByRole('button', { name: /previous/i })

    // Click next button
    fireEvent.click(nextBtn)
    
    // Should update pagination counter
    const paginationText = screen.getByText(/\d+ \/ \d+/)
    expect(paginationText).toBeInTheDocument()
    
    // Click previous button
    fireEvent.click(prevBtn)
    expect(paginationText).toBeInTheDocument()
  })
})
