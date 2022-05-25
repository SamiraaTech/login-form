import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const profileCard = () => {
    return (
    <div className="card_wrapper">
        <Header />
        <Content />
        <Footer />
    </div>
    )
}


export default profileCard;