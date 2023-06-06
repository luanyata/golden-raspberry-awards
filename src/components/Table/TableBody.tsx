import { TableRow } from './TableRow'
import { TableBodyProps } from './types'

export const TableBody = <T extends {}>({
  items,
  columns,
}: TableBodyProps<T>) => {
  return (
    <tbody>
      {items.map((item, index) => (
        <TableRow key={index} columns={columns} item={item} />
      ))}
    </tbody>
  )
}
