import { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { IoIosSearch } from 'react-icons/io'
import { MoviesWinnersYear } from './types'
import { Button } from '@components/Button'
import { Card } from '@components/Card'
import { Heading } from '@components/Heading'
import { Stack } from '@components/Stack'
import { Table, TableHeader, TableBody } from '@components/Table'
import { TextInput } from '@components/TextInput'
import { MoviesService } from '@services'

const columnsMovieWinners = [
  { title: 'Id', field: 'id' },
  { title: 'Year', field: 'year' },
  { title: 'Title', field: 'title' },
]

export const ListMoviesWinnersYear = () => {
  const [movies, setMovies] = useState<MoviesWinnersYear[]>([])

  const { register, handleSubmit } = useForm()

  const onSearch: SubmitHandler<FieldValues> = async (data, e) => {
    try {
      e?.preventDefault()

      if (!data.year) return

      const listMovies = await MoviesService.getWinnerByYear(data.year)

      const itens = listMovies.map((movie: MoviesWinnersYear) => ({
        id: movie.id,
        year: movie.year,
        title: movie.title,
      }))

      setMovies(itens)
    } catch (error: any) {
      alert('Error to get movies winners by year')
    }
  }

  return (
    <Card>
      <Heading fontWeight="bold" size="md">
        List movie winners by year
      </Heading>

      <form onSubmit={handleSubmit(onSearch)} role="form">
        <Stack direction="horizontal" spacing={2} mb={3}>
          <TextInput
            placeholder="Search by year"
            type="number"
            name="year"
            register={register}
          />
          <Button
            type="submit"
            variant="primary"
            borderRadius="xs"
            name="search"
          >
            <IoIosSearch size={20} />
          </Button>
        </Stack>
      </form>

      <Table isStriped={true}>
        <TableHeader columns={columnsMovieWinners} />
        <TableBody items={movies} columns={columnsMovieWinners} />
      </Table>
    </Card>
  )
}
