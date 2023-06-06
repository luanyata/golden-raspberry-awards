import { ButtonHTMLAttributes, ComponentProps } from 'react'
import { IconButtonContainer } from './styles'

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentProps<typeof IconButtonContainer>
