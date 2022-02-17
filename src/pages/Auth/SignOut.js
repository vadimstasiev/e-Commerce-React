import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import Loading from "./Loading"
import { logout } from "../../firebase";

import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const SignOut = (props) => {
    const {from} = props
    const navigate = useNavigate()
    const [user, loading, error] = useAuthState(auth);

    setTimeout(logout, 500) 
    

    useEffect(() => {
      if (!user) navigate(from?from:"/");
    }, [user, loading]);

    return (
      <Loading/>
    );
  }


export default (SignOut);
