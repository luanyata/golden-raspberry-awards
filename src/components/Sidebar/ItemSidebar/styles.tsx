import { NavLink } from 'react-router-dom'
import { styled } from '@styles'

export const ItemSidebarContainer = styled(NavLink, {
  display: 'flex',
  alignItems: 'center',
  padding: '0 1rem',
  height: '3rem',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    color: '$gray200',
  },

  variants: {
    active: {
      true: {
        color: '$blue',
      },
    },
  },
})
