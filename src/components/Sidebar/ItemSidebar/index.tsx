import { useLocation } from 'react-router-dom'
import { ItemSidebarContainer } from './styles'
import { ItemSidebarProps } from './types'

export const ItemSidebar = ({ label, path }: ItemSidebarProps) => {
  const location = useLocation()

  const match = location.pathname === path

  return (
    <ItemSidebarContainer to={path} active={match}>
      {label}
    </ItemSidebarContainer>
  )
}
