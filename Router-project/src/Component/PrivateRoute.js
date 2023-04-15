import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRute = ({ isLoggedIn, children }) => {
    // const navigate = useNavigate()
    if (isLoggedIn) {
        return children;
    }
    else {
        return <Navigate to="/login" />

    }
}

export default PrivateRute
