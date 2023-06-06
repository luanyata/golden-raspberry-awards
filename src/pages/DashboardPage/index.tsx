import { Stack } from '@components/Stack'
import { ListMoviesWinnersYear } from './ListMoviesWinnersYear'
import { ListTop3Winners } from './ListTop3Winners'
import { ListYearMultipleWinners } from './ListYearMultipleWinners'
import { ProducersLogestShortestIntervalBetween } from './ProducersLogestShortestIntervalBetween'

export const DashboardPage = () => {
  return (
    <Stack spacing={10}>
      <Stack
        direction={{ '@initial': 'horizontal', '@bp1': 'vertical' }}
        spacing={5}
      >
        <ListYearMultipleWinners />
        <ListTop3Winners />
      </Stack>

      <Stack
        direction={{ '@initial': 'horizontal', '@bp1': 'vertical' }}
        spacing={5}
      >
        <ProducersLogestShortestIntervalBetween />
        <ListMoviesWinnersYear />
      </Stack>
    </Stack>
  )
}
