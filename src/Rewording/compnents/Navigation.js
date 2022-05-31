import React, { useState } from 'react';
import Logo from '../img/logo-feedo.png';
import hamburger from '../img/hamburger.svg';
import { items } from './constants/content';

const Navigation = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    return (
        <div className="header-top">
            <h1>
                <img src={Logo} alt="React Logo" />
            </h1>
            <nav className="navigation">
                <button className="hamburger"
                    onClick={ () => {
                        setIsNavExpanded(!isNavExpanded);
                    }}>
                    <img src={hamburger} alt="menu" />
                </button>
                <div className={`navigation-menu ${isNavExpanded ? "expanded" : null}`} >
                    <ul className="menu-list">
                        {items.map((item) => {
                            return <li>
                                <a href={item.url}>{item.name}</a>
                            </li>
                        })}
                    </ul>
                </div>

            </nav>
        </div>
    )
}

export default Navigation;