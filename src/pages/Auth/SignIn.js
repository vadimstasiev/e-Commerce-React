import React, {useState} from "react";
import { useFirebase } from 'react-redux-firebase'
import { useNavigate } from "react-router-dom";

import SvgBackground from "../../Components/SvgBackground";

import Toggle from "../../Components/ThemeToggle";

const SignIn = (props) => {
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [authError, setAuthError] = useState("");

    const firebase = useFirebase()

    const handleSubmit = e => {
        e.preventDefault();
        console.log({ email, password })
        firebase.login({ email, password })
        .then(creds => {
            console.log(creds)
            setAuthError("")
        })
        .catch(error => {
            let errorMessageFormated = error.code.replace('auth/','').replace(/-/g, " ")
            errorMessageFormated = errorMessageFormated.charAt(0).toUpperCase() + errorMessageFormated.slice(1)
            setAuthError(errorMessageFormated)
        })
    };



    // const logInWithGoogle = () => {
    //     firebase.login({
    //         provider: 'google',
    //         type: 'redirect'
    //     })
    // };


    let from = { pathname: "/" }

    // if (auth.uid) return <Navigate to={from} />;
    return (
      <SvgBackground>
        <Toggle />
          {/* <div className="social-login">
            <button
              className="ml-3 btn btn-outline-danger"
              type="button"
              onClick={logInWithGoogle}
            >
              <span>
                <i className="fab fa-google-plus-g" /> Sign in with Google
              </span>
            </button>
          </div>
          <p> OR </p> */}

        <div className="grid place-items-center pt-40">
            <form className="bg-white dark:bg-zinc-900 shadow-md rounded px-8 pt-6 pb-8 mb-4 border-zinc-200 border-2">
                <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-100 text-sm font-bold mb-2">
                    Username
                </label>
                <input autoComplete="email" className="shadow appearance-none border rounded w-full py-2 px-3 dark:bg-zinc-900 dark:border-zinc-500 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                id="username" type="text" placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)}
                />
                </div>
                <div className="mb-6">
                <label className="block text-gray-700 dark:text-gray-100 text-sm font-bold mb-2">
                    Password
                </label>
                <input autoComplete="current-password" className="shadow appearance-none border rounded w-full py-2 px-3 dark:bg-zinc-900 dark:border-zinc-500 text-gray-700 dark:text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password" type="password" placeholder="******************"
                onChange={(e)=>setPassword(e.target.value)}/>
                {authError ? 
                    <p className="text-red-500 text-xs italic">{authError}.</p>
                : null}
                </div>
                <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
                onClick={handleSubmit}>
                    Sign In
                </button>
                <div className="inline-block align-baseline font-bold text-sm ml-20 text-blue-500">
                    <div className="hover:text-blue-800 cursor-pointer">Forgot Password?</div>
                    <div className="hover:text-blue-800 cursor-pointer" onClick={() => navigate('/SignUp')}>Sign Up</div>
                </div>
                </div>
            </form>
        </div>
      </SvgBackground>
    );
  }


export default (SignIn);
