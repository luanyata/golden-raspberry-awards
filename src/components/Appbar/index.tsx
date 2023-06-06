import { Text } from '@components/Text'
import { AppbarContainer } from './styles'

export const AppBar = ({ title }: { title: string }) => {
  return (
    <AppbarContainer>
      <Text>{title}</Text>
    </AppbarContainer>
  )
}
