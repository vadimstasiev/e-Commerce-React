import React, {useState, useEffect} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { RollbackOutlined } from '@ant-design/icons';


import SvgBackground from "../../Components/SvgBackground";

import {FixedToggle} from "../../Components/ThemeToggle";

import { auth, signInWithGoogle } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Background from "../../Components/Background";

const SignIn = () => {
    const navigate = useNavigate()
    const {state} = useLocation()
    const from = state?state.from:"/"
    const [user, loading, error] = useAuthState(auth);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [authError, setAuthError] = useState("");

    const handleSubmit = e => {
        signInWithEmailAndPassword(auth, email, password)
        .then(creds => {
            console.log(creds)
            setAuthError("")
        })
        .catch(error => {
            if(error.code){
              let errorMessageFormated = error.code.replace('auth/','').replace(/-/g, " ")
              errorMessageFormated = errorMessageFormated.charAt(0).toUpperCase() + errorMessageFormated.slice(1) + "."
              setAuthError(errorMessageFormated)
            } else {
              setAuthError("Unkown Error")
            }
        })
    };



    useEffect(() => {
      if (user) navigate(from);
    }, [user, loading]);

    return (
      <Background>
      <SvgBackground>
        <FixedToggle />
        <div className="grid place-items-center pt-40">
            <form className="bg-white dark:bg-zinc-900 shadow-md rounded px-8 pt-6 pb-8 mb-4 border-zinc-200 border-2">
                <div className="mb-4">
                  <button className="w-full bg-gray-500 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
                    onClick={()=>signInWithGoogle().then(()=>navigate("/AccountSettings"))}>
                        Sign In with Google
                  </button>
                </div>
                <div className="mb-4">
                  <label className="block text-zinc-700 dark:text-zinc-100 text-sm font-bold mb-2">
                      Email
                  </label>
                  <input autoComplete="email" className="shadow appearance-none border rounded w-full py-2 px-3 dark:bg-zinc-900 dark:border-zinc-500 text-zinc-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                  id="email" type="text" placeholder="Email"
                  onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-zinc-700 dark:text-zinc-100 text-sm font-bold mb-2">
                      Password
                  </label>
                  <input autoComplete="current-password" className="shadow appearance-none border rounded w-full py-2 px-3 dark:bg-zinc-900 dark:border-zinc-500 text-zinc-700 dark:text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password" type="password" placeholder="******************"
                  onChange={(e)=>setPassword(e.target.value)}/>
                  {authError ? 
                      <p className="text-red-500 text-xs italic">{authError}</p>
                  : null}
                </div>
                <div className="flex items-center justify-between">
                  <button className="bg-gray-500 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
                    onClick={handleSubmit}>
                      Sign In
                  </button>
                  <div className="inline-block align-baseline font-bold text-sm ml-20 text-gray-500">
                      <div className="hover:text-gray-800 cursor-pointer" onClick={() => navigate('/ResetPassword', {state:{from}})}>Forgot Password?</div>
                      <div className="hover:text-gray-800 cursor-pointer" onClick={() => navigate('/SignUp', {state:{from}})}>Don't have an account? Sign Up!</div>
                  </div>
                </div>
            </form>
            <div className="flex">
              <RollbackOutlined className="text-zinc-700 dark:text-zinc-100 text-lg"/>
              <div className="text-zinc-700 dark:text-zinc-100 text-lg font-bold pt-0.5 pl-2 cursor-pointer" onClick={() => navigate('/')}>
                  Home
              </div>
            </div>
        </div>
      </SvgBackground>
      </Background>
    );
  }


export default (SignIn);
