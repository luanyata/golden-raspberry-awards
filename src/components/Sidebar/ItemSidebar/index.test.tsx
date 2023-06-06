import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ItemSidebar } from './'

describe('ItemSidebar', () => {
  it('should render label', () => {
    render(
      <MemoryRouter>
        <ItemSidebar label="Test" path="/test" to="/test" />
      </MemoryRouter>,
    )

    const labelElement = screen.getByText('Test')
    expect(labelElement).toBeInTheDocument()
  })

  it('should have active class when path matches location', () => {
    render(
      <MemoryRouter initialEntries={['/test']}>
        <ItemSidebar label="Test" path="/test" to="/test" />
      </MemoryRouter>,
    )

    const itemSidebarContainer = screen.getByRole('link')
    expect(itemSidebarContainer).toHaveClass('active')
  })

  it('should not have active class when path does not match location', () => {
    render(
      <MemoryRouter initialEntries={['/other']}>
        <ItemSidebar label="Test" path="/test" to="/test" />
      </MemoryRouter>,
    )

    const itemSidebarContainer = screen.getByRole('link')

    expect(itemSidebarContainer).not.toHaveClass('active')
  })
})
