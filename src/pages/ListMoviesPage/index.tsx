import { useState, useEffect } from 'react'

import { Filter, Movie, MovieResponse } from './types'
import { Card } from '@components/Card'
import { Heading } from '@components/Heading'
import { Pagination } from '@components/Paginator'
import { Table, TableHeader, TableBody } from '@components/Table'
import { TableColumn } from '@components/Table/types'
import { MoviesService } from '@services'

const columnsMovies: TableColumn[] = [
  { title: 'ID', field: 'id' },
  {
    title: 'Year',
    field: 'year',
    filter: {
      type: 'text',
    },
  },
  { title: 'Title', field: 'title' },
  {
    title: 'Winner?',
    field: 'winner',
    filter: {
      type: 'select',
      options: [
        { value: '', label: 'Yes / No' },
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
      ],
    },
  },
]

export const ListMoviesPage = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [currentPage, setCurrentPage] = useState(0)
  const [countTotalPages, setCountTotalPages] = useState(1)
  const [filter, setFilter] = useState<Filter>({
    winner: '',
    year: '',
  })

  const fetchMovies = async (page: number) => {
    try {
      const { content, totalPages, number } = await MoviesService.getMovies(
        page,
        filter.winner,
        filter.year,
      )

      const listMovies: Movie[] = content.map((movie: MovieResponse) => ({
        id: movie.id,
        year: movie.year,
        title: movie.title,
        winner: movie.winner ? 'Yes' : 'No',
      }))

      setMovies(listMovies)
      setCurrentPage(number)
      setCountTotalPages(totalPages)
    } catch (error) {
      alert('Error to get movies')
    }
  }

  useEffect(() => {
    fetchMovies(0)
  }, [filter])

  const goToPage = (page: number) => {
    fetchMovies(page)
  }

  const handleFilterChange = (updatedFilter: Filter) => {
    setFilter(updatedFilter)
  }

  return (
    <Card>
      <Heading fontWeight="bold" size="md">
        List Movies
      </Heading>
      <Table isStriped>
        <TableHeader
          columns={columnsMovies}
          onFilter={handleFilterChange}
          xAlign="center"
          yAlign="middle"
        />
        <TableBody items={movies} columns={columnsMovies} />
      </Table>
      <Pagination
        currentPage={currentPage}
        totalPages={countTotalPages}
        onPageChange={goToPage}
      />
    </Card>
  )
}
