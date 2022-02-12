import React, {useState} from "react";
import "./Login.css";
import { useFirebase } from 'react-redux-firebase'
import { Link, Navigate } from "react-router-dom";

import SvgBackground from "../../Components/SvgBackground";

import Toggle from "../../Components/ThemeToggle";

const Login = (props) => {
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
        <div className="login-form">
          <h3 className="h3 mb-3 font-weight-normal"> Sign in</h3>
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
          <form className="form-signin" onSubmit={handleSubmit}>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required=""
              autoFocus=""
              onChange={(e)=>setEmail(e.target.value)}
            />
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required=""
              onChange={(e)=>setPassword(e.target.value)}
            />

            <button className="btn btn-outline-success btn-block" type="submit">
              <i className="fas fa-sign-in-alt" /> Sign in
            </button>
            <p className="mt-2">Forgot password?</p>
            <hr />
            <p>
              New user?
              <Link to="/register">
                <i className="fas fa-user-plus" /> Sign up
              </Link>
            </p>
          </form>
          {authError ? (
            <div className="p-3 mb-2 bg-danger ">
              <span>{authError}</span>
            </div>
          ) : null}
        </div>
      </SvgBackground>
    );
  }


export default (Login);
