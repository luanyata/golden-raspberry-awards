import { render, screen } from '@testing-library/react'
import { Heading } from './'

describe('Heading', () => {
  it('renders children', () => {
    render(<Heading>Hello World</Heading>)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })
})
