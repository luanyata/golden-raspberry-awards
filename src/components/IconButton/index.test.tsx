import { fireEvent, render, screen } from '@testing-library/react'
import { IconButton } from './'

describe('IconButton', () => {
  it('renders children', () => {
    render(<IconButton>Click me</IconButton>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<IconButton onClick={handleClick}>Click me</IconButton>)
    fireEvent.click(screen.getByText('Click me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('is disabled when disabled prop is true', () => {
    render(<IconButton disabled>Click me</IconButton>)
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
