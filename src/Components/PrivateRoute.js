import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { auth } from '../firebase';
import { useAuthState } from "react-firebase-hooks/auth";


const PrivateRoute = () => {
    const [user, loadingUser, error] = useAuthState(auth);

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    console.log(user)
    return (user) ? <Outlet /> : <Navigate to="/SignIn" />;
    // return auth ? <Outlet /> : <Navigate to={{
    //     pathname: "/SignIn",
    //     state: { from: path }
    // }} />;
}

export default PrivateRoute