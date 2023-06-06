import { render, screen, waitFor } from '@testing-library/react'
import { ListMoviesPage } from '.'

jest.mock('@services', () => ({
  MoviesService: {
    getMovies: jest.fn(() => ({
      content: [
        {
          id: 1,
          year: 2020,
          title: 'Test Movie 1',
          winner: true,
        },
        {
          id: 2,
          year: 2020,
          title: 'Test Movie 2',
          winner: false,
        },
        {
          id: 3,
          year: 2021,
          title: 'Test Movie 3',
          winner: true,
        },
      ],
      totalPages: 1,
      number: 0,
    })),
  },
}))

describe('ListMoviesPage', () => {
  it('should render the page title', async () => {
    render(<ListMoviesPage />)
    await waitFor(() => {
      expect(screen.getByText('List Movies')).toBeInTheDocument()
    })
  })

  it('should render the table headers', async () => {
    render(<ListMoviesPage />)
    await waitFor(() => {
      expect(screen.getByText('ID')).toBeInTheDocument()
      expect(screen.getByText('Year')).toBeInTheDocument()
      expect(screen.getByText('Title')).toBeInTheDocument()
      expect(screen.getByText('Winner?')).toBeInTheDocument()
    })
  })

  it('should render the movies list', async () => {
    render(<ListMoviesPage />)
    await waitFor(() => {
      expect(screen.getByText('Test Movie 1')).toBeInTheDocument()
      expect(screen.getByText('Test Movie 2')).toBeInTheDocument()
      expect(screen.getByText('Test Movie 3')).toBeInTheDocument()
    })
  })
})
