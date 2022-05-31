import React from 'react';
import Navigation from './compnents/Navigation';
import ParaphraseTop from './compnents/ParaphraseTop';
import ParaphraseMain from './compnents/ParaphraseMain';

import './style.scss';
import './responsive.scss'

const RewordingPage = () => {

    return (
        <>
        <section className="container">
            <Navigation />
            <ParaphraseTop /> 
            <ParaphraseMain />
        </section>
        </>
    )
}

export default RewordingPage;