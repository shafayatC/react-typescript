import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { userContext } from '../../App';

const PrivateRoute = () => {
    const {user} =  useContext(userContext); 
    const auth = user.username; // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to home page
    return auth ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute; 