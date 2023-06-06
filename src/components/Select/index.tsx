import { Controller } from 'react-hook-form'
import { Select } from './styles'
import { SelectProps } from './types'

export const TextSelect = ({
  name,
  options,
  control,
  ...rest
}: SelectProps) => {
  return (
    <Controller
      {...rest}
      control={control}
      name={name}
      render={({ field }) => (
        <Select {...field} name={name}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      )}
    ></Controller>
  )
}
