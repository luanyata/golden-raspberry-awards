import { ButtonContainer } from './styles'
import { ButtonProps } from './types'

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <ButtonContainer {...rest}>{children}</ButtonContainer>
}
