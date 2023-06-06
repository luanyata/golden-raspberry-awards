import { Input } from './styles'
import { TextInputProps } from './types'

export const TextInput = ({ register, name, ...rest }: TextInputProps) => {
  return <Input {...rest} {...register(name)} />
}
