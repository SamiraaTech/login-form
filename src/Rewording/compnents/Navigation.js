import React from 'react';
import  Logo from '../img/logo-feedo.png';

const Navigation = () => {
    return (
        <div className="header-top">
            <h1>
                <img src={Logo} alt="React Logo" />
            </h1>
            <nav>
                <ul className="menu-list">
                    <li>
                        <a href={"/"}>Home</a>
                    </li>
                    <li>
                        <a href={"/"}>FAQ</a>
                    </li>
                    <li>
                        <a href={"/"}>Blog</a>
                    </li>
                    <li>
                        <a href={"/"}>About Us</a>
                    </li>
                    <li>
                        <a href={"/"}>Privacy & Policy</a>
                    </li>
                </ul>
            </nav>
        </div>  
    )
}

export default Navigation;