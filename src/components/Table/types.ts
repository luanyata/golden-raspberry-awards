import { ReactNode } from 'react'
import { Control, FieldValues, UseFormRegister } from 'react-hook-form'

export type Options = {
  value: string | number
  label: string
}

export type Filter = {
  type: string
  options?: Options[]
}

export type TableColumn = {
  title: string
  field: string
  filter?: Filter
  registerFilter?: UseFormRegister<FieldValues>
}

export type TableProps = {
  size?: 'small' | 'medium' | 'large'
  isStriped?: boolean
  width?: string
  children: ReactNode
}

export type TableHeadProps = {
  columns: TableColumn[]
  onFilter?: (data: any) => any
  xAlign?: 'left' | 'center' | 'right'
  yAlign?: 'top' | 'middle'
}

export type TableBodyProps<T> = {
  items: T[]
  columns: TableColumn[]
}

export type TableRowProps<T> = {
  item: T
  columns: TableColumn[]
}

export type TableCellProps = {
  children: ReactNode
}

export type TableFilterProps = {
  type: string
  register: UseFormRegister<FieldValues>
  control: Control<FieldValues, any>
  name: string
  options?: Options[]
}
