import { ComponentProps } from 'react'
import { styled } from '@styles'

export const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$shorter',
  margin: ' 0 0 $3',
  color: '$gray900',
  variants: {
    size: {
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      '2xl': { fontSize: '$2xl' },
      '3xl': { fontSize: '$3xl' },
      '4xl': { fontSize: '$4xl' },
      '5xl': { fontSize: '$5xl' },
      '6xl': { fontSize: '$6xl' },
    },
    fontWeight: {
      regular: { fontWeight: '$regular' },
      medium: { fontWeight: '$medium' },
      bold: { fontWeight: '$bold' },
    },
  },

  defaultVariants: {
    size: 'md',
    fontWeight: 'regular',
  },
})

export interface HeadingProps extends ComponentProps<typeof Heading> {}
