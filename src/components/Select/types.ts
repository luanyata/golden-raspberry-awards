import { SelectHTMLAttributes } from 'react'
import { Control, FieldValues } from 'react-hook-form'

type Options = {
  value: string | number
  label: string
}

export type SelectProps = {
  options: Options[]
  name: string
  control: Control<FieldValues, any>
} & SelectHTMLAttributes<HTMLSelectElement>
