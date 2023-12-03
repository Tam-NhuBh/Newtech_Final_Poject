import React, {useState, useEffect } from 'react'
import { Link, useHistory  } from 'react-router-dom'

import ImageLight from '../assets/img/login-office.jpeg'
import ImageDark from '../assets/img/login-office-dark.jpeg'
import { GithubIcon, TwitterIcon } from '../icons'
import { Label, Input, Button } from '@windmill/react-ui'
import  loginApi  from '../api/googleAuth';
import { useDispatch } from 'react-redux';

import { loginSuccess , signup } from '../actions/userActions';
import { AUTH } from '../constraints/actionTypes';



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
    const script = document.createElement('script');
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // clean up for react lifecycle
      window.onGoogleSuccess = undefined;
      document.body.removeChild(script)
    }
  }, []);
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

              <Button block layout="outline"  >
                <GithubIcon className="w-4 h-4 mr-2" aria-hidden="true"  />
                Github
              </Button>
              <Button className="mt-4" block layout="outline">
                <TwitterIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                Twitter
              </Button>


                <div id="g_id_onload"
                  data-client_id={"334206124572-ev4hmlf84egst4rlsv4j9rih12ao56bl.apps.googleusercontent.com"}
                  data-callback="onGoogleSuccess" // as defined above
                  data-context="signin"
                  data-ux_mode="popup"
                  data-auto_prompt="false">
                </div>

                <div className="g_id_signin"
                  data-type="standard"
                  data-shape="rectangular"
                  data-theme="filled_blue"
                  data-text="signin_with"
                  data-size="large"
                  data-logo_alignment="left">
                </div>

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
