import React, { useState } from 'react';
import Navigation from './compnents/Navigation';
import ParaphraseTop from './compnents/ParaphraseTop';
import ParaphraseMain from './compnents/ParaphraseMain';

import './style.scss';
import './responsive.scss'

const RewordingPage = () => {
    const [ messageLeft, setMessageLeft ] = useState('');
    const [ messageRight, setMessageRight ] = useState('');

    const handleClick = e => {
        e.preventDefault();
        setMessageRight(messageLeft);
    }

    const handleRemove = (e) => {
        e.preventDefault();
        setMessageLeft(" ");
        setMessageRight(" ");
       };
     
    return (
        <>
        <section className="container">
            <Navigation />
            <ParaphraseTop handleRemove={handleRemove}/> 
            <ParaphraseMain messageLeft={messageLeft} setMessageLeft={setMessageLeft}
            messageRight={messageRight} handleClick={handleClick}
             />
        </section>
        </>
    )
}

export default RewordingPage;