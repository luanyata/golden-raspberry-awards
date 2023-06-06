import { useEffect } from 'react'
import {
  TableCellContainer,
  TableHeadContainer,
  TableRowContainer,
} from './styles'
import { TableHeadProps } from './types'
import { Text } from '../Text'
import { TableFilter } from './TableFilter'
import { useForm } from 'react-hook-form'
import { debounce } from '../../helpers/debounce'

export const TableHeader = ({
  columns,
  onFilter,
  xAlign,
  yAlign,
}: TableHeadProps) => {
  const { register, control, watch } = useForm()

  useEffect(() => {
    const debouncedFilter = debounce((value: any) => {
      if (onFilter) {
        onFilter(value)
      }
    }, 500)

    const subscription = watch((value) => {
      debouncedFilter(value)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [watch, onFilter])

  return (
    <TableHeadContainer>
      <TableRowContainer>
        {columns.map((column) => (
          <TableCellContainer
            key={column.field}
            xAlign={xAlign}
            yAlign={yAlign}
          >
            <Text mb={1} mt={1}>
              {column.title}
            </Text>
            {!!column.filter?.type && (
              <TableFilter
                type={column.filter.type}
                name={column.field}
                options={column.filter.options}
                register={register}
                control={control}
              />
            )}
          </TableCellContainer>
        ))}
      </TableRowContainer>
    </TableHeadContainer>
  )
}
