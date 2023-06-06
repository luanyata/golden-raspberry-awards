import { TableCellContainer } from './styles'
import { TableCellProps } from './types'

export const TableCell = ({ children }: TableCellProps) => {
  return <TableCellContainer>{children}</TableCellContainer>
}
