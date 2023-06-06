import { InputHTMLAttributes } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

export type TextInputProps = {
  register: UseFormRegister<FieldValues>
  name: string
} & InputHTMLAttributes<HTMLInputElement>
