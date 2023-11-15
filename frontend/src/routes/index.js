import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
// const Dashboard = lazy(() => import('../pages/Homepage'))
const Profile = lazy(() => import('../pages/Profile/Profile.js'))


const routes = [
  // {
  //   path: '/homepage', // the url
  //   component: Dashboard, // view rendered
  // },
  {
    path: '/profile',
    component: Profile,
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
