import { useEffect, useState } from 'react'
import {
  MinMaxIntervalProducers,
  MinMaxIntervalProducersResponse,
} from './types'
import { Card } from '@components/Card'
import { Heading } from '@components/Heading'
import { Stack } from '@components/Stack'
import { Table, TableHeader, TableBody } from '@components/Table'
import { MoviesService } from '@services'

const columnsLongestInterval = [
  { title: 'Producer', field: 'producer' },
  { title: 'Interval', field: 'interval' },
  { title: 'Previous Years', field: 'previousYears' },
  { title: 'Following Years', field: 'followingYears' },
]

const mapItem = (
  item: MinMaxIntervalProducersResponse,
): MinMaxIntervalProducers => ({
  producer: item.producer,
  interval: item.interval,
  previousYears: item.previousWin,
  followingYears: item.followingWin,
})

export const ProducersLogestShortestIntervalBetween = () => {
  const [minItems, setMinItems] = useState<MinMaxIntervalProducers[]>([])
  const [maxItems, setMaxItems] = useState<MinMaxIntervalProducers[]>([])

  useEffect(() => {
    const getProducersLogestShortestIntervalBetween = async () => {
      try {
        const { min, max } =
          await MoviesService.getMinAndMaxWinIntervalForProducers()

        const minProduce = min.map(mapItem)
        const maxProduce = max.map(mapItem)

        setMaxItems(maxProduce)
        setMinItems(minProduce)
      } catch (error) {}
    }

    getProducersLogestShortestIntervalBetween()
  }, [])

  return (
    <Card>
      <Stack spacing={5}>
        <Stack>
          <Heading fontWeight="bold" size="md">
            Producers with longest and shortest interval between wins
          </Heading>
          <Heading size="lg">Maximum</Heading>
          <Table isStriped>
            <TableHeader columns={columnsLongestInterval} />
            <TableBody items={maxItems} columns={columnsLongestInterval} />
          </Table>
        </Stack>
        <Stack>
          <Heading size="lg">Minimum</Heading>
          <Table isStriped>
            <TableHeader columns={columnsLongestInterval} />
            <TableBody items={minItems} columns={columnsLongestInterval} />
          </Table>
        </Stack>
      </Stack>
    </Card>
  )
}
