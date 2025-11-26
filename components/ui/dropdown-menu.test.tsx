import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuGroup,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from './dropdown-menu'
import { useState } from 'react'

describe('DropdownMenu', () => {
  it('renders trigger and opens content', async () => {
    const user = userEvent.setup()
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Item 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    const trigger = screen.getByText('Open Menu')
    expect(trigger).toBeInTheDocument()

    await user.click(trigger)

    await waitFor(() => {
      expect(screen.getByText('My Menu')).toBeInTheDocument()
      expect(screen.getByText('Item 1')).toBeInTheDocument()
    })
  })

  it('renders checkbox items', async () => {
    const user = userEvent.setup()
    const TestComponent = () => {
      const [checked, setChecked] = useState(false)
      return (
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuCheckboxItem checked={checked} onCheckedChange={setChecked}>
              Check me
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }

    render(<TestComponent />)
    await user.click(screen.getByText('Open'))

    const checkbox = await screen.findByRole('menuitemcheckbox')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toHaveAttribute('aria-checked', 'false')

    await user.click(checkbox)
    expect(checkbox).toHaveAttribute('aria-checked', 'true')
  })

  it('renders radio items', async () => {
    const user = userEvent.setup()
    const TestComponent = () => {
      const [value, setValue] = useState('one')
      return (
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuRadioGroup value={value} onValueChange={setValue}>
              <DropdownMenuRadioItem value="one">One</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="two">Two</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }

    render(<TestComponent />)
    await user.click(screen.getByText('Open'))

    const radioOne = await screen.findByRole('menuitemradio', { name: 'One' })
    const radioTwo = await screen.findByRole('menuitemradio', { name: 'Two' })

    expect(radioOne).toHaveAttribute('aria-checked', 'true')
    expect(radioTwo).toHaveAttribute('aria-checked', 'false')

    await user.click(radioTwo)
    expect(radioTwo).toHaveAttribute('aria-checked', 'true')
  })

  it('renders sub-menu and other components', async () => {
    const user = userEvent.setup()
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Group</DropdownMenuLabel>
            <DropdownMenuItem>
              Item with Shortcut <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Sub Menu</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Sub Item</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    await user.click(screen.getByText('Open'))

    expect(screen.getByText('Group')).toBeInTheDocument()
    expect(screen.getByText('⌘K')).toBeInTheDocument()
    expect(screen.getByText('Sub Menu')).toBeInTheDocument()

    // Open sub-menu
    await user.hover(screen.getByText('Sub Menu'))
    await user.click(screen.getByText('Sub Menu')) // Click might be needed depending on implementation/test env

    await waitFor(() => {
      expect(screen.getByText('Sub Item')).toBeInTheDocument()
    })
  })
})
