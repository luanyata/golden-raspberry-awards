import { styled } from '@styles'

export const Input = styled('input', {
  width: '100%',
  padding: '$1 $2',
  border: '1px solid $gray400',
  borderRadius: '$sm',
  fontSize: '$sm',
  color: '$gray900',
  fontWeight: '$regular',

  '&:placeholder': {
    color: '$gray400',
  },
})
