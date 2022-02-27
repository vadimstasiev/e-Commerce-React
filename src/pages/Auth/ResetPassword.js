import React, {useState} from "react";
import { Result } from 'antd';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { sendPasswordReset } from "../../firebase";

import SvgBackground from "../../Components/SvgBackground";

import {FixedToggle} from "../../Components/ThemeToggle";
import Background from "../../Components/Background";

const SignIn = (props) => {
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const [authError, setAuthError] = useState("");


    const submitEmail = e => {
        console.log(email)
        sendPasswordReset(email)
        .then(() => {
            setAuthError("")
            setSubmitted(true)
        })
        .catch(error => {
            let errorMessageFormated = error.code.replace('auth/','').replace(/-/g, " ")
            errorMessageFormated = errorMessageFormated.charAt(0).toUpperCase() + errorMessageFormated.slice(1) + "."
            setAuthError(errorMessageFormated)
        })
    };




    let from = { pathname: "/" }

    return (
      <Background>
      <SvgBackground>
        <FixedToggle />
        {submitted?
          <div className="grid place-items-center pt-40">
            <Result
                className='text-slate-900 dark:text-slate-400'
                status="success"
                title="Successfully sent an email to reset password!"
                subTitle="Please check your email and follow the instructions to reset your password!"
                // extra={}
            />
            <Link to='/SignIn'>
                    <button type="button" className="mt-5 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-zinc-900 
                        bg-white rounded-lg border border-zinc-200 hover:bg-zinc-100 hover:text-gray-700 focus:z-10 focus:ring-2
                        focus:ring-gray-700 focus:text-gray-700 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-600 
                        dark:hover:text-white dark:hover:bg-zinc-700"
                    >
                      {"Back to Sign In"}
                    </button>
            </Link>
          </div>  
        :
          <div className="grid place-items-center pt-40">
              <form className="bg-white dark:bg-zinc-900 shadow-md rounded px-8 pt-6 pb-8 mb-4 border-zinc-200 border-2">
                  <div className="mb-4">
                  <label className="block text-zinc-700 dark:text-zinc-100 text-sm font-bold mb-2">
                      Check your email for a verification code.
                  </label>
                    <input autoComplete="email" className="shadow appearance-none border rounded w-full py-2 px-3 dark:bg-zinc-900 dark:border-zinc-500 text-zinc-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                    id="email" type="text" placeholder="Email"
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <div className="mb-8">
                      {authError ? 
                          <p className="text-red-500 text-xs italic">{authError}</p>
                      : null}
                    </div>
                    <div className="flex items-center justify-between">
                      <button className="bg-gray-500 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
                      onClick={submitEmail}>
                          Send Email
                      </button>
                      
                      <div className="inline-block align-baseline font-bold text-sm ml-20 text-gray-500">
                        <div className="hover:text-gray-800 cursor-pointer" onClick={() => navigate('/SignIn', {from})}>Sign In, instead.</div>
                      </div>
                    </div>
                  </div>
              </form>
          </div>
        }
      </SvgBackground>
      </Background>
    );
  }


export default (SignIn);
