import React, {useEffect} from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { useAuthState } from "react-firebase-hooks/auth";


const PrivateRoute = ({from}) => {
    const [user, loadingUser, error] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) navigate("/SignIn", {state:{from}})
    }, [user, loadingUser]);

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    // return (user) ? <Outlet /> : <Navigate to="/SignIn" from />;
    return user ? <Outlet /> : <></>
    // return user ? <Outlet /> : <Navigate to={{
    //     pathname: "/SignIn",
    //     state: { from: from }
    // }} />;
}

export default PrivateRoute