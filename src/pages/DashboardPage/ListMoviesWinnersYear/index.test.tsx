import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import axios from 'axios'
import { ListMoviesWinnersYear } from './index'
import { MoviesService } from '@services'

describe('ListMoviesWinnersYear', () => {
  beforeEach(() => {
    axios.get = jest.fn()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should search for movies when the form is submitted', async () => {
    const movies = [
      { id: 1, year: 2021, title: 'Movie 1' },
      { id: 2, year: 2021, title: 'Movie 2' },
    ]

    const spyApi = jest
      .spyOn(MoviesService, 'getWinnerByYear')
      .mockResolvedValue(movies)

    const { container } = render(<ListMoviesWinnersYear />)

    const searchInput = screen.getByPlaceholderText('Search by year')
    const searchButton = screen.getByRole('button')

    fireEvent.change(searchInput, { target: { value: '2021' } })
    fireEvent.click(searchButton)

    await waitFor(() => {
      expect(spyApi).toHaveBeenCalledWith('2021')
      expect(screen.getByText('Movie 1')).toBeInTheDocument()
      expect(screen.getByText('Movie 2')).toBeInTheDocument()
      expect(container.querySelectorAll('tbody tr').length).toBe(2)
    })
  })
})
