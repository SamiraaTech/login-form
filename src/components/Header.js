import React from 'react';
import profile from './profile.jpg';

const Header = () => {
    return (
        <div className="profile_wrapper">
            <div className="bg-top">
                <div className="rounded-profile">
                    <img className="profile-img"
                    src={profile} alt={"profile"} />
                </div>
                
            </div>
        </div>
    );
}

export default Header;