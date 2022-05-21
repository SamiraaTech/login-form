import React, { useState, useEffect } from 'react';

const Login = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ disabled, setDisabled ] = useState(true);

    const handleSubmit = e => {
        e.preventDefault(); 
        let test = String(email)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (!test) {
            alert("Email isn't valid");
        } else {
            console.log(email,":",password);
        }
    }
    
    useEffect(() => {
        if (email && password) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [email, password]);

    return (
        <div className="login-wrapper">
            <div className="inner-form">
                <h1>LOGIN</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input className="email disabled" type="text" name="email" value={email}
                     onChange={e => setEmail(e.target.value)}/>

                    <label>Password</label>
                    <input className="password disabled" type="password" name="password" value={password}
                    onChange={e => setPassword(e.target.value)}/>

                    <a href={'/'}>Forget Password?</a>

                    <button className="login_btn" type="submit" value="submit" disabled={disabled}>Login</button>
                    <p className='signup'>New to our platform?
                        <a href={'/'}>Signup</a>
                    </p>
                    <div className="circle_wrapper">
                        <div className="or_circle">
                            <span>Or</span>
                        </div>

                    </div>
                    
                </form>
                <div className="social_buttons">
                        <button className="Fb_btn" type="button" value="submit" >Facebook</button>
                        <button className="g_btn" type="button" value="submit" >Google</button>
                    </div>
            </div>
        </div>
    )
}

export default Login;