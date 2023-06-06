import { styled } from '@styles'

export const ButtonContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  border: 'none',
  cursor: 'pointer',

  variants: {
    variant: {
      primary: {
        backgroundColor: '$blue',
        color: '$white',
      },
      secondary: {
        backgroundColor: '$black',
        color: '$white',
      },
      selected: {
        backgroundColor: '$gray900',
        color: '$white',
      },
      ghost: {
        backgroundColor: 'transparent',
        color: '$gray900',
      },
    },
    borderRadius: {
      none: {
        borderRadius: 0,
      },
      xs: {
        borderRadius: '$xs',
      },
    },
  },
})
