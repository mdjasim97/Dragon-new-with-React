import React, { useContext } from 'react';
import { AuthContext } from '../Pages/Context/ContextProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname)

    if (loading) {
        return <div className='min-h-screen flex items-center justify-center'>
            <span className="text-9xl loading loading-spinner loading-lg"></span>
        </div>
    }

    if (user) {
        return children
    }
    
    

    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

export default PrivateRoutes;