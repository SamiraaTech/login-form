import React, { useState } from 'react';

const Login = ({ handleChange }) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(`${[email]} : ${[password]}`);
    }
    return (
        <div className="login-wrapper">
            <div className="inner-form">
                <h1>LOGIN</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input className="email" type="email" name="email" value={email}
                     onChange={e => setEmail(e.target.value)} required />

                    <label>Password</label>
                    <input className="password" type="password" name="password" value={password}
                    onChange={e => setPassword(e.target.value)} required/>

                    <a href={'/'}>Forget Password?</a>

                    <button className="login_btn" type="submit" value="submit" disabled={false}>Login</button>
                    <p className='signup'>New to our platform?
                        <a href={'/'}>Signup</a>
                    </p>
                    <div className="circle_wrapper">
                        <div className="or_circle">
                            <span>Or</span>
                        </div>

                    </div>
                    <div className="social_buttons">
                        <button className="Fb_btn" type="submit" value="submit" >Facebook</button>
                        <button className="g_btn" type="submit" value="submit" >Google</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;