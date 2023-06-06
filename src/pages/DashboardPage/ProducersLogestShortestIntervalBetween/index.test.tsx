import { render, screen, waitFor } from '@testing-library/react'
import { ProducersLogestShortestIntervalBetween } from './'

jest.mock('@services', () => ({
  MoviesService: {
    getMinAndMaxWinIntervalForProducers: jest.fn(() => ({
      min: [
        {
          producer: 'Producer 1',
          interval: 1,
          previousWin: 2001,
          followingWin: 2002,
        },
      ],
      max: [
        {
          producer: 'Producer 2',
          interval: 10,
          previousWin: 2000,
          followingWin: 2010,
        },
      ],
    })),
  },
}))

describe('ProducersLogestShortestIntervalBetween', () => {
  it('should render the component', async () => {
    render(<ProducersLogestShortestIntervalBetween />)

    await waitFor(() => {
      expect(
        screen.getByText(
          'Producers with longest and shortest interval between wins',
        ),
      ).toBeInTheDocument()
      expect(screen.getByText('Maximum')).toBeInTheDocument()
      expect(screen.getByText('Producer 2')).toBeInTheDocument()
      expect(screen.getByText('10')).toBeInTheDocument()
      expect(screen.getByText('2000')).toBeInTheDocument()
      expect(screen.getByText('2010')).toBeInTheDocument()

      expect(screen.getByText('Minimum')).toBeInTheDocument()
      expect(screen.getByText('Producer 1')).toBeInTheDocument()
      expect(screen.getByText('1')).toBeInTheDocument()
      expect(screen.getByText('2000')).toBeInTheDocument()
      expect(screen.getByText('2001')).toBeInTheDocument()
    })
  })
})
