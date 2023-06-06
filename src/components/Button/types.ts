import { ButtonHTMLAttributes, ComponentProps } from 'react'
import { ButtonContainer } from './styles'
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentProps<typeof ButtonContainer>
