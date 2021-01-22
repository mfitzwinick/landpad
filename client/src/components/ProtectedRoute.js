import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
const ProtectedRoute = ({ onLoginFail = "/", ...rest }) => {
    const [isUser, setIsUser] = useState()
    useEffect(() => {
        setIsUser(localStorage.getItem("token"))
    }, [])
    return isUser ? (
        <Route {...rest} />
    ) : (
        <Redirect to={onLoginFail} />
    );
};
export default ProtectedRoute;