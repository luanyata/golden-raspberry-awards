import { useEffect, useState } from 'react'
import { MultipleWinners, MultipleWinnersResponse } from './types'
import { Card } from '@components/Card'
import { Heading } from '@components/Heading'
import { Table, TableHeader, TableBody } from '@components/Table'
import { MoviesService } from '@services'

const columnsMultipleWinner = [
  { title: 'Year', field: 'year' },
  { title: 'Win Count', field: 'winCount' },
]

export const ListYearMultipleWinners = () => {
  const [items, setItems] = useState<MultipleWinners[]>([])

  useEffect(() => {
    const getListYearMultipleWinners = async () => {
      try {
        const { years } = await MoviesService.getMultipleWinner()

        const yearsWithWinCount = years.map(
          ({ winnerCount, year }: MultipleWinnersResponse) => {
            return {
              year,
              winCount: winnerCount,
            }
          },
        )
        setItems(yearsWithWinCount)
      } catch (error) {
        alert('Error to get list year multiple winners')
      }
    }
    getListYearMultipleWinners()
  }, [])

  return (
    <Card>
      <Heading fontWeight="bold" size="md">
        List years with multiple winners
      </Heading>
      <Table isStriped={true}>
        <TableHeader columns={columnsMultipleWinner} />
        <TableBody items={items} columns={columnsMultipleWinner} />
      </Table>
    </Card>
  )
}
