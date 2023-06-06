import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from './'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Hello World</Button>)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('calls onClick event handler when clicked', () => {
    const onClickMock = jest.fn()
    const buttonText = 'Click me'
    render(<Button onClick={onClickMock}>{buttonText}</Button>)

    const buttonElement = screen.getByText(buttonText)
    fireEvent.click(buttonElement)

    expect(onClickMock).toHaveBeenCalled()
  })

  it('has default styles applied', () => {
    render(<Button variant="primary">Hello World</Button>)
    const buttonElement = screen.getByText('Hello World')

    expect(buttonElement).toHaveAttribute(
      'class',
      expect.stringContaining('variant-primary'),
    )
  })
})
