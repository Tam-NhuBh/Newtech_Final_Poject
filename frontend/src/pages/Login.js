import React, {useState, useEffect } from 'react'
import { Link, useHistory  } from 'react-router-dom'

import ImageLight from '../assets/img/login-office.jpeg'
import ImageDark from '../assets/img/login-office-dark.jpeg'
import { LoginIcon, GoogleIcon } from '../icons'
import { Label, Input, Button } from '@windmill/react-ui'

import '@fortawesome/fontawesome-svg-core/styles.css';


const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };
function Login() {
  const history = useHistory();
  useEffect(() => {

    window.onGoogleSuccess = async (response) => {
      
      window.location.href = 'http://localhost:8080/auth/google';
      //history.push('/app/homepage');
      console.log(response);
    };

    // Inject the google provided script 
    // (an importable module would be nicer here)
    // const script = document.createElement('script');
    // script.src = "https://accounts.google.com/gsi/client";
    // script.async = true;
    // document.body.appendChild(script);

    return () => {
      // clean up for react lifecycle
      window.onGoogleSuccess = undefined;
      //document.body.removeChild(script)
    }
  }, []);
  const handleGoogleLoginClick = () => {
    console.log("handleGoogleLoginClick")
    // Trigger Google login when the button is clicked
    if (window.onGoogleSuccess) {
      window.onGoogleSuccess();
    }
  };
  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Login</h1>
              <Label>
                <span>Email</span>
                <Input className="mt-1" type="email" placeholder="john@doe.com" />
              </Label>

              <Label className="mt-4">
                <span>Password</span>
                <Input className="mt-1" type="password" placeholder="***************" />
              </Label>



              <hr className="my-8" />
              <Button className="mt-6" block layout="outline">
                <LoginIcon className="w-6 h-6 mr-2" aria-hidden="true" />
                Login
              </Button>

              <Button className="mt-6" block layout="outline" onClick={handleGoogleLoginClick}>
                <GoogleIcon className="w-6 h-6 mr-2" aria-hidden="true"  />
                Google
              </Button>

              

   
              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/forgot-password"
                >
                  Forgot your password?
                </Link>
              </p>
              <p className="mt-1">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/create-account"
                >
                  Create account
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Login
