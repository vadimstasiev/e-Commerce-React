import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'

const PrivateRoute = () => {
    const auth = useSelector(state => state.firebase.auth)
    console.log(useSelector(state => state.firebase))
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return (isLoaded(auth) && !isEmpty(auth)) ? <Outlet /> : <Navigate to="/SignIn" />;
    // return auth ? <Outlet /> : <Navigate to={{
    //     pathname: "/SignIn",
    //     state: { from: path }
    // }} />;
}

export default PrivateRoute