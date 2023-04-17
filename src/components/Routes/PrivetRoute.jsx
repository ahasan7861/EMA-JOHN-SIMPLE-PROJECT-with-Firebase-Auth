import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providerers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location)



    if(loading){
        return <div>Loading....</div>
    }

    if(user){
        console.log(user)
        return children;
    }

    return <Navigate to="/login" state={{from : location}}></Navigate>
};

export default PrivetRoute;