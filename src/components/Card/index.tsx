import { ComponentProps } from 'react'
import { styled } from '@styles'

export const Card = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$md',
  padding: '$4',
  boxShadow: '$md',
})

export interface CardProps extends ComponentProps<typeof Card> {}
