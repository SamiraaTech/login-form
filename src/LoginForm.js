import React from 'react';
import Login from './components/Login';
import Welcome from './components/Welcome';

const LoginForm = () => {
    
    return (
    <div className="container">
        <Welcome />
        <Login /> 
    </div>
    )
};

export default LoginForm;