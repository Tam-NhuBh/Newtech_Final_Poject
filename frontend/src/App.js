// App.js
import React, { lazy, useState,useEffect  } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer'
// Redux
import { Provider } from 'react-redux';
import store from './redux';
const Layout = lazy(() => import('./containers/Layout'))
const DefaultLayout = lazy(() => import('./containers/DefaultLayout'))
const Login = lazy(() => import('./pages/Login'))
const CreateAccount = lazy(() => import('./pages/CreateAccount'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const Reference = lazy(() => import('./pages/Reference'))
const Details = lazy(() => import('./components/Reference/ReferenceDetail'))
const Newsfeed = lazy(() => import('./pages/Newfeeds/Newfeeds'))
const Detailfeed= lazy(() => import('./pages/Detailfeed/detailfeed'))


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mặc định là false
  const [user, setUser] = useState({});
  useEffect(() => {
    const theUser = localStorage.getItem("user");

    if (theUser && !theUser.includes("undefined")) {
      setUser(JSON.parse(theUser));
    }
  }, []);

  return (
    <>
      <Provider store={store}>
        <Router>
          <AccessibleNavigationAnnouncer />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/create-account" component={CreateAccount} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/reference" component={Reference} />
            <Route path= "/details" component={Details} />
            <Route path="/app" component={Layout} />
            <Route path="/newsfeed" component={Newsfeed} />
            <Route path="/detailfeed/:id" component={Detailfeed} />


            {/* Route mặc định */}
            <Route exact path="/">
              {user?.email ? <Redirect to="/app" /> : <DefaultLayout />}
            </Route>
          </Switch>
        </Router>
      </Provider>
    </>
  )
}

export default App
