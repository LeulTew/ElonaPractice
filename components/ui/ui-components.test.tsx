import { render, screen } from '@testing-library/react'
import { Button } from './button'
import { Badge } from './badge'
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './card'

describe('UI Components', () => {
  describe('Button', () => {
    it('renders with default variant', () => {
      render(<Button>Click me</Button>)
      const button = screen.getByRole('button', { name: 'Click me' })
      expect(button).toHaveClass('bg-primary')
    })

    it('renders as child when asChild is true', () => {
      render(<Button asChild><a href="/">Link Button</a></Button>)
      const link = screen.getByRole('link', { name: 'Link Button' })
      expect(link).toBeInTheDocument()
    })
  })

  describe('Badge', () => {
    it('renders with default variant', () => {
      render(<Badge>Badge</Badge>)
      expect(screen.getByText('Badge')).toHaveClass('bg-primary')
    })
    
    it('renders with secondary variant', () => {
      render(<Badge variant="secondary">Secondary</Badge>)
      expect(screen.getByText('Secondary')).toHaveClass('bg-secondary')
    })
  })

  describe('Card', () => {
    it('renders all subcomponents', () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Title</CardTitle>
            <CardDescription>Description</CardDescription>
          </CardHeader>
          <CardContent>Content</CardContent>
          <CardFooter>Footer</CardFooter>
        </Card>
      )
      
      expect(screen.getByText('Title')).toBeInTheDocument()
      expect(screen.getByText('Description')).toBeInTheDocument()
      expect(screen.getByText('Content')).toBeInTheDocument()
      expect(screen.getByText('Footer')).toBeInTheDocument()
    })
  })
})
