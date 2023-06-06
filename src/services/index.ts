import { get } from './config'

const getWinnerByYear = async (year: number): Promise<any> =>
  await get(`?winner=true&year=${year}`)

const getStudios = async (): Promise<any> =>
  await get('?projection=studios-with-win-count')

const getMultipleWinner = async (): Promise<any> =>
  await get('?projection=years-with-multiple-winners')

const getMinAndMaxWinIntervalForProducers = async (): Promise<any> =>
  await get('?projection=max-min-win-interval-for-producers')

const getMovies = async (
  page: number,
  winner: string,
  year: string,
): Promise<any> =>
  await get(`?page=${page}&size=15&winner=${winner}&year=${year}`)

export const MoviesService = {
  getWinnerByYear,
  getStudios,
  getMultipleWinner,
  getMinAndMaxWinIntervalForProducers,
  getMovies,
}
