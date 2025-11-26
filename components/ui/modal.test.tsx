import { render, screen, fireEvent } from '@testing-library/react'
import { Modal } from './modal'
import { describe, it, expect, vi } from 'vitest'

describe('Modal', () => {
  it('does not render when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        <div>Modal Content</div>
      </Modal>
    )
    expect(screen.queryByText('Modal Content')).not.toBeInTheDocument()
  })

  it('renders correctly when isOpen is true', () => {
    render(
      <Modal isOpen={true} onClose={() => {}} title="Test Modal">
        <div>Modal Content</div>
      </Modal>
    )
    expect(screen.getByText('Test Modal')).toBeInTheDocument()
    expect(screen.getByText('Modal Content')).toBeInTheDocument()
  })

  it('calls onClose when clicking close button', () => {
    const handleClose = vi.fn()
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <div>Content</div>
      </Modal>
    )
    // The close button has an X icon. We can find it by role button or class.
    // The component has a button with onClick={onClose}
    const buttons = screen.getAllByRole('button')
    // There might be multiple buttons if content has buttons, but here content is simple.
    // The close button is the only button in the modal header.
    fireEvent.click(buttons[0])
    expect(handleClose).toHaveBeenCalled()
  })

  it('locks body scroll when open', () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <div>Content</div>
      </Modal>
    )
    expect(document.body.style.overflow).toBe('hidden')
  })

  it('unlocks body scroll when closed', () => {
    const { rerender } = render(
      <Modal isOpen={true} onClose={() => {}}>
        <div>Content</div>
      </Modal>
    )
    expect(document.body.style.overflow).toBe('hidden')
    
    rerender(
      <Modal isOpen={false} onClose={() => {}}>
        <div>Content</div>
      </Modal>
    )
    expect(document.body.style.overflow).toBe('unset')
  })
})
