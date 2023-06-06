import { ItemSidebar } from './ItemSidebar'
import { sidebarConfig } from './config'
import { SidebarContainer } from './styles'

export const SideBar = () => {
  return (
    <SidebarContainer>
      {sidebarConfig.map((item) => (
        <ItemSidebar
          to={item.path}
          key={item.key}
          label={item.label}
          path={item.path}
        />
      ))}
    </SidebarContainer>
  )
}
