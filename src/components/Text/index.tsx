import { ComponentProps } from 'react'
import { styled } from '@styles'
import { fontSizes } from '@styles/tokens'

export const Text = styled('p', {
  fontFamily: '$default',

  variants: {
    size: Object.keys(fontSizes).reduce<Record<string, { fontSize: string }>>(
      (acc, cur) => {
        acc[cur] = {
          fontSize: `$${cur}`,
        }
        return acc
      },
      {},
    ),
    mt: {
      1: {
        marginTop: '$2',
      },
    },
    mb: {
      1: {
        marginBottom: '$2',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface TextProps extends ComponentProps<typeof Text> {}
