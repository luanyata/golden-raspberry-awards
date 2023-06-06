import { IconButtonContainer } from './styles'
import { IconButtonProps } from './types'

export const IconButton = ({
  disabled,
  children,
  ...rest
}: IconButtonProps) => {
  return (
    <IconButtonContainer disabled={disabled} {...rest}>
      {children}
    </IconButtonContainer>
  )
}
