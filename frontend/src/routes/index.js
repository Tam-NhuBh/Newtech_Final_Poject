import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
// const Dashboard = lazy(() => import('../pages/Homepage'))
const Forms = lazy(() => import('../pages/Forms'))
const Notification = lazy(() => import('../pages/HomePage/components/NotificationList/Notification'))


const routes = [
  {
    path: '/homepage', // the url
    component: Notification, // view rendered
  },
  {
    path: '/forms',
    component: Forms,
  },
  // {
  //   path: '/cards',
  //   component: Cards,
  // },
  // {
  //   path: '/charts',
  //   component: Charts,
  // },
  // {
  //   path: '/buttons',
  //   component: Buttons,
  // },
  // {
  //   path: '/modals',
  //   component: Modals,
  // },
  // {
  //   path: '/tables',
  //   component: Tables,
  // },
  // {
  //   path: '/404',
  //   component: Page404,
  // },
  // {
  //   path: '/blank',
  //   component: Blank,
  // },
]

export default routes
