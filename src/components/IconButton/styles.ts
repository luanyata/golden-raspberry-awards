import { styled } from '@styles'

export const IconButtonContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  backgroundColor: 'transparent',

  '&: disabled': {
    cursor: 'not-allowed',
    color: '$gray300',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$blue',
      },
      transparent: {
        color: '$gray500',
        backgroundColor: 'transparent',
      },
    },
    size: {
      sm: {
        width: '$6',
        height: '$6',
      },
      md: {
        width: '$8',
        height: '$8',
      },
      lg: {
        width: '$10',
        height: '$10',
      },
    },
  },

  defaultVariants: {
    variant: 'transparent',
    size: 'md',
  },
})
