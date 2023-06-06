import { TableContainer } from './styles'
import { TableProps } from './types'

export const Table = ({ isStriped, size, width, children }: TableProps) => {
  return (
    <TableContainer isStriped={isStriped} size={size} width={width}>
      {children}
    </TableContainer>
  )
}
