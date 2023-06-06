import { render, screen, waitFor } from '@testing-library/react'
import { ListYearMultipleWinners } from './'

jest.mock('@services', () => ({
  MoviesService: {
    getMultipleWinner: jest.fn(() => ({
      years: [
        { year: 2020, winnerCount: 5 },
        { year: 2019, winnerCount: 3 },
        { year: 2018, winnerCount: 2 },
        { year: 2017, winnerCount: 1 },
      ],
    })),
  },
}))

describe('ListYearMultipleWinners', () => {
  it('should render the component', async () => {
    render(<ListYearMultipleWinners />)

    await waitFor(() => {
      expect(
        screen.getByText('List years with multiple winners'),
      ).toBeInTheDocument()
      expect(screen.getByText('Year')).toBeInTheDocument()
      expect(screen.getByText('Win Count')).toBeInTheDocument()
      expect(screen.getByText('2020')).toBeInTheDocument()
      expect(screen.getByText('5')).toBeInTheDocument()
      expect(screen.getByText('2019')).toBeInTheDocument()
      expect(screen.getByText('3')).toBeInTheDocument()
      expect(screen.getByText('2018')).toBeInTheDocument()
      expect(screen.getByText('2')).toBeInTheDocument()
    })
  })
})
