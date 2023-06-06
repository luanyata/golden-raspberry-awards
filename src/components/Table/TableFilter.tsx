import { ReactElement } from 'react'
import { TextSelect } from '@components/Select'
import { TextInput } from '@components/TextInput'
import { TableFilterProps } from './types'

export const TableFilter = ({
  type,
  register,
  control,
  name,
  options,
}: TableFilterProps) => {
  const Input = () => {
    return <TextInput register={register} name={name} />
  }

  const Select = () => {
    const selectOptions = options || []
    return (
      <TextSelect
        defaultValue=""
        name={name}
        options={selectOptions}
        control={control}
      />
    )
  }

  const filterTypes: {
    [key: string]: () => ReactElement
  } = {
    text: Input,
    select: Select,
  }

  return filterTypes[type]()
}
