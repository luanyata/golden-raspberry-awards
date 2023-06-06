import { styled } from '@styles'

export const SidebarContainer = styled('aside', {
  display: 'flex',
  flexDirection: 'column',
  width: '200px',
  height: 'calc(100vh - 64px)',
  backgroundColor: '$gray100',
  color: '$gray900',
  padding: '16px',
  overflow: 'auto',
  margin: '0 16px 0 0',
})
