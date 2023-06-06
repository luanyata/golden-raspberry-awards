import { styled } from '@styles'

export const LayoutContainer = styled('main', {
  display: 'flex',
  flexDirection: 'row',
})

export const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: 'calc(100vh - 64px)',
  overflow: 'hidden',
  padding: '16px 16px 16px 0',
})
