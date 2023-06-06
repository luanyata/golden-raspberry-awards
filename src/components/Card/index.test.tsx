import { render, screen } from '@testing-library/react'
import { Card } from './'

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Hello World</Card>)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })
})
