import { render, screen } from '@testing-library/react'
import { ListTop3Winners } from './'

jest.mock('@services', () => ({
  MoviesService: {
    getStudios: jest.fn(() => ({
      studios: [
        { name: 'Studio 1', winCount: 5 },
        { name: 'Studio 2', winCount: 3 },
        { name: 'Studio 3', winCount: 2 },
        { name: 'Studio 4', winCount: 1 },
      ],
    })),
  },
}))

describe('ListTop3Winners', () => {
  it('should render the top 3 studios with winners', async () => {
    render(<ListTop3Winners />)

    expect(await screen.findByText('Studio 1')).toBeInTheDocument()
    expect(await screen.findByText('Studio 2')).toBeInTheDocument()
    expect(await screen.findByText('Studio 3')).toBeInTheDocument()
    expect(screen.queryByText('Studio 4')).not.toBeInTheDocument()
  })
})
