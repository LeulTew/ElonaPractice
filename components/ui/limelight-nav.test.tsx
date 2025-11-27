import { render, screen, fireEvent, within, act } from '@testing-library/react'
import { LimelightNav } from './limelight-nav'
import { describe, it, expect, vi } from 'vitest'

describe('LimelightNav', () => {
  const items = [
    { id: 'home', icon: <svg data-testid="icon-home" />, label: 'Home' },
    { id: 'explore', icon: <svg data-testid="icon-explore" />, label: 'Explore' },
  ]

  it('renders all items', () => {
    render(<LimelightNav items={items} />)
    expect(screen.getByLabelText('Home')).toBeInTheDocument()
    expect(screen.getByLabelText('Explore')).toBeInTheDocument()
  })

  it('handles tab change', () => {
    const handleTabChange = vi.fn()
    render(<LimelightNav items={items} onTabChange={handleTabChange} />)
    
    const exploreButton = screen.getByLabelText('Explore').closest('a')
    // The component renders <a> tags, not <button> tags based on the failure output
    fireEvent.click(exploreButton!)
    
    expect(handleTabChange).toHaveBeenCalledWith(1)
  })

  it('applies custom class names to nav and icons', () => {
    const { container } = render(
      <LimelightNav
        items={items}
        className="custom-nav"
        iconContainerClassName="icon-wrap"
        iconClassName="icon-style"
        limelightClassName="custom-limelight"
      />
    )

    const nav = screen.getByRole('navigation')
    expect(nav.className).toContain('custom-nav')

    const homeLink = screen.getByLabelText('Home')
    expect(homeLink?.className).toContain('icon-wrap')
    const homeIcon = within(homeLink as HTMLElement).getByTestId('icon-home')
    expect(homeIcon.getAttribute('class')).toContain('icon-style')

    const limelight = container.querySelector('.custom-limelight')
    expect(limelight).not.toBeNull()
  })

  it('returns null when no items are provided', () => {
    const { container } = render(<LimelightNav items={[]} />)
    expect(container.firstChild).toBeNull()
  })

  it('calls per-item onClick handlers', () => {
    const itemClick = vi.fn()
    render(
      <LimelightNav
        items={[{ id: 'home', icon: <svg data-testid="icon-home" />, label: 'Home', onClick: itemClick }]}
        onTabChange={() => {}}
      />
    )

    fireEvent.click(screen.getByLabelText('Home'))
    expect(itemClick).toHaveBeenCalled()
  })

  it('positions the limelight under the active item', () => {
    vi.useFakeTimers()
    try {
      const { getByTestId } = render(<LimelightNav items={items} />)
      const limelight = getByTestId('limelight-indicator') as HTMLDivElement
      const exploreLink = screen.getByLabelText('Explore')

      Object.defineProperty(exploreLink, 'offsetLeft', { configurable: true, value: 120 })
      Object.defineProperty(exploreLink, 'offsetWidth', { configurable: true, value: 60 })
      Object.defineProperty(limelight, 'offsetWidth', { configurable: true, value: 30 })

      act(() => {
        fireEvent.click(exploreLink)
      })
      act(() => {
        vi.runAllTimers()
      })

      expect(limelight.style.left).toBe('135px')
      expect(limelight.className).toContain('transition-[left]')
    } finally {
      vi.useRealTimers()
    }
  })

  it('handles invalid active index gracefully', () => {
    render(<LimelightNav items={items} defaultActiveIndex={99} />)
    // Should not crash
    const limelight = screen.getByTestId('limelight-indicator')
    expect(limelight).toBeInTheDocument()
  })
})
