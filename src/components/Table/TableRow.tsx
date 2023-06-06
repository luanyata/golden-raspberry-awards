import { TableCell } from './TableCell'
import { TableRowContainer } from './styles'
import { TableRowProps } from './types'

export const TableRow = ({ item, columns }: TableRowProps<any>) => {
  return (
    <TableRowContainer>
      {columns.map((column) => (
        <TableCell key={column.field}>{item[column.field]}</TableCell>
      ))}
    </TableRowContainer>
  )
}
