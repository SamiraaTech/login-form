import React from 'react';
import { sth } from '../constants/constant';

const Content = () => {
    return (
        <div className="content_wrapper">
            <h3 className="contact_Name">Jhon Doe</h3>
            <p className="contact_info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <ul className="contact_us">
                {sth.map((item) => {
                    return (
                    <li key={item.id}>
                        <a href='/'>
                            <img className="svg-icon" src={item.img} alt={item.alt} />
                        </a>
                    </li>
                    )
                })}     
            </ul>
        </div>
    )

}

export default Content;