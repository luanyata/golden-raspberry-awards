export type Filter = {
  winner: string
  year: string
}

export type Movie = {
  id: string
  title: string
  year: string
  winner: string
}

export type MovieResponse = {
  id: string
  title: string
  year: string
  winner: boolean
}
