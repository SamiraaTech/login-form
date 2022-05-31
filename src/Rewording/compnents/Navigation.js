import React, { useState } from 'react';
import Logo from '../img/logo-feedo.png';
import hamburger from '../img/hamburger.svg';

const Navigation = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    return (
        <div className="header-top">
            <h1>
                <img src={Logo} alt="React Logo" />
            </h1>
            <nav className="navigation">
                <button className="hamburger"
                    onClick={() => {
                        setIsNavExpanded(!isNavExpanded);
                    }}>
                    <img src={hamburger} alt="menu" />
                </button>
                <div className={ isNavExpanded ? "navigation-menu expanded" : "navigation-menu" }>
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
                </div>

            </nav>
        </div>
    )
}

export default Navigation;