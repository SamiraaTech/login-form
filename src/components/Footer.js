import React from 'react';
import { items } from '../constants/constant';


const Footer = () => {
    return (
        <div className="footer_wrapper">
            <ul className="social_icons">
                {items.map( item => {
                    return (<li key={item.id}>
                        <a href={item.url}>
                            <img src={item.img} alt={item.alt} />      
                        </a>
                    </li>)
                })}
            </ul>
        </div>
    );
}

export default Footer;