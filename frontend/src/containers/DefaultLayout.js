import React, { useContext, Suspense, useEffect, lazy } from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import routes from '../routes'

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Main from '../containers/Main'
import ThemedSuspense from '../components/ThemedSuspense'
import { SidebarContext } from '../context/SidebarContext'
import NavHeader from '../components/NavHeader';

const Page404 = lazy(() => import('../pages/404'))

function Layout() {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext)
  let location = useLocation()

  useEffect(() => {
    closeSidebar()
  }, [location])

  return (
    <div className={`flex flex-col h-screen bg-gray-50 dark:bg-gray-900 ${isSidebarOpen && 'overflow-hidden'}`}>

      <NavHeader />
      
      <div className="flex flex-1">

      <div className="flex flex-col flex-1 w-full">
        <Main>
          <Suspense fallback={<ThemedSuspense />}>
            <Switch>
              {routes.map((route, i) => {
                return route.component ? (
                  <Route
                    key={i}
                    exact={true}
                    path={`/app${route.path}`}
                    render={(props) => <route.component {...props} />}
                  />
                ) : null
              })}
              <Route component={Page404} />
            </Switch>
          </Suspense>
        </Main>
      </div>
      </div>
    </div>
  )
}

export default Layout
