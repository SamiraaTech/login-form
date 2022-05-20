import React from 'react';
import Login from './components/Login';
import Welcome from './components/Welcome';

const LoginForm = () => {
    
    const handleChange = e => {
        return String(e.target.value)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    }
    
    return (
    <div className="container">
        <Welcome />
        <Login
        handleChange={handleChange}
        /> 
    </div>
    )
};

export default LoginForm;