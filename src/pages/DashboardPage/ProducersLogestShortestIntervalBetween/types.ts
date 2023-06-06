export type MinMaxIntervalProducers = {
  producer: string
  interval: number
  previousYears: number
  followingYears: number
}

export type MinMaxIntervalProducersResponse = {
  producer: string
  interval: number
  previousWin: number
  followingWin: number
}
