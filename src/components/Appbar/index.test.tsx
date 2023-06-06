import { render, screen } from '@testing-library/react'
import { AppBar } from './'

describe('AppBar', () => {
  it('should render the title', () => {
    const title = 'My App Title'
    render(<AppBar title={title} />)
    const titleElement = screen.getByText(title)
    expect(titleElement).toBeInTheDocument()
  })
})
