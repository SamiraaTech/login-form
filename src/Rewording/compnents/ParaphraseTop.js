import React from 'react';
import Trash from '../img/trash.svg';

const ParaphraseTop = () => {
    return (
        <div className="header-bottom">
            <div className="left-side">
                <label htmlFor="dropdown">Density of paraphrasing:</label>
                <select id="dropdown" name="dropdown">
                    <option value="Standard">Standard</option>
                    <option value="Fluency">Fluency</option>
                    <option value="Professional">Professioanl</option>
                    <option value="Premium">Premium</option>
                </select>
            </div>
            <div className="right-side">
                <span className="trash">
                    <img src={Trash} alt="remove btn"/>
                </span>
            </div>
        </div>
    )
}


export default ParaphraseTop;