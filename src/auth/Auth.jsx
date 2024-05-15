import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

function Auth() {
    const userData = JSON.parse(localStorage.getItem("crm_user"));

    const navigate = useNavigate()

    useEffect(() => {
        if (!userData) {
            navigate('/login')
        }
    }, [])

    // If user data is available, render the Outlet (child routes)
    return <>
        <Navbar />
        <Outlet />
    </>;
}

export default Auth;
