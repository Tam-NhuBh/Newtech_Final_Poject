// Layout.js
import React, { useState ,useContext, Suspense, useEffect, lazy } from 'react';
import { Switch, Route, useHistory  } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
import { connect, useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../actions/userActions';
import routes from '../routes';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header/Header';
import Main from '../containers/Main';
import ThemedSuspense from '../components/ThemedSuspense';
import { SidebarContext } from '../context/SidebarContext';

const Page404 = lazy(() => import('../pages/404'));

function Layout() {
  //const [user, setUser] = useState({ /* user data from form */ });
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    // Read the JWT token from the HTTP-only cookie
    const authToken = Cookies.get('authToken');  
    console.log("authToken",authToken);
    if (authToken) {
      // Decode the JWT token to get user information
      const decodedToken = jwtDecode(authToken);
      const userToken = decodedToken.user;
      Cookies.remove('authToken');
      console.log("userToken",userToken);
      localStorage.setItem('user', JSON.stringify(userToken));
      dispatch(loginSuccess({ user: userToken}));

      // Redirect to the desired route
      history.push('/app');
    } else {
      // Handle case where the token is not available
      // Redirect to login or show an error message
      history.push('/login');
    }
  }, [dispatch, history]);

  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${isSidebarOpen && 'overflow-hidden'}`}
    >
      <Sidebar />

      <div className="flex flex-col flex-1 w-full">
        <Header />


        <Main>
          <Suspense fallback={<ThemedSuspense />}>
            <Switch>
              {routes.map((route, i) =>
                route.component ? (
                  <Route
                    key={i}
                    exact={true}
                    path={`/app${route.path}`}
                    render={(props) => <route.component {...props} />}
                  />
                ) : null
              )}
              <Route component={Page404} />
            </Switch>
          </Suspense>
        </Main>
      </div>
    </div>
  );
}



export default connect(null, { loginSuccess })(Layout);