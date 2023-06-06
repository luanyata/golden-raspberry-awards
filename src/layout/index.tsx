import { Outlet } from 'react-router-dom'
import { AppBar } from '@components/Appbar'
import { SideBar } from '@components/Sidebar'
import { ContentContainer, LayoutContainer } from './styles'

export const Layout = () => {
  return (
    <>
      <AppBar title="Front End Test React" />
      <LayoutContainer>
        <SideBar />
        <ContentContainer>
          <Outlet />
        </ContentContainer>
      </LayoutContainer>
    </>
  )
}
