import { Routes as Switch, Route, Navigate } from 'react-router-dom'
import { DashboardPage } from '@pages/DashboardPage'
import { ListMoviesPage } from '@pages/ListMoviesPage'
import { Layout } from '@layout'

export const Routes = () => {
  return (
    <Switch>
      <Route path="/">
        <Route element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/movies" element={<ListMoviesPage />} />
        </Route>
      </Route>
      <Route path="*" element={<div>Not Found</div>} />
    </Switch>
  )
}
