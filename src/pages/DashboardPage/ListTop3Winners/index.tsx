import { useEffect, useState } from 'react'
import { Top3Winners, Top3WinnersResponse } from './types'
import { Card } from '@components/Card'
import { Heading } from '@components/Heading'
import { Table, TableHeader, TableBody } from '@components/Table'
import { MoviesService } from '@services'

const columnsTop3Studios = [
  { title: 'Name', field: 'name' },
  { title: 'Win Count', field: 'winCount' },
]

export const ListTop3Winners = () => {
  const [items, setItems] = useState<Top3Winners[]>([])

  const listTop3 = (items: Top3WinnersResponse[]) => {
    return items
      .sort((a: Top3WinnersResponse, b: Top3WinnersResponse) => {
        return b.winCount - a.winCount
      })
      .slice(0, 3)
  }

  useEffect(() => {
    const getListTop3Winners = async () => {
      try {
        const { studios } = await MoviesService.getStudios()

        const orderByWinCountTop3 = listTop3(studios)

        const top3 = orderByWinCountTop3.map(
          ({ name, winCount }: Top3WinnersResponse) => {
            return {
              name,
              winCount,
            }
          },
        )
        setItems(top3)
      } catch (error) {
        alert('Error to get top 3 winners')
      }
    }

    getListTop3Winners()
  }, [])

  return (
    <Card>
      <Heading fontWeight="bold" size="md">
        Top 3 studios with winners
      </Heading>
      <Table isStriped={true}>
        <TableHeader columns={columnsTop3Studios} />
        <TableBody items={items} columns={columnsTop3Studios} />
      </Table>
    </Card>
  )
}
