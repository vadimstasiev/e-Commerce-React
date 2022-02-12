import React, {useState} from "react";
import "./Login.css";
import { useFirebase } from 'react-redux-firebase'
import { Link, Navigate } from "react-router-dom";

import SvgBackground from "../../Components/SvgBackground";

import Toggle from "../../Components/ThemeToggle";

const Login = (props) => {
    const [state, setState] = useState({
        submitted: false
    });
    const firebase = useFirebase()

    const handleChange = e => {
        setState({
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setState({ submitted: true });
        const { inputEmail, inputPassword } = state;
        firebase.login({ email: inputEmail, password: inputPassword });
    };

    // const logInWithGoogle = () => {
    //     firebase.login({
    //         provider: 'google',
    //         type: 'redirect'
    //     })
    // };

    const { auth, authError } = props;
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
              onChange={handleChange}
            />
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required=""
              onChange={handleChange}
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
            <div class="p-3 mb-2 bg-danger text-white">
              <span>{authError}</span>
            </div>
          ) : null}
        </div>
      </SvgBackground>
    );
  }


export default (Login);
