import React from 'react';
import Trash from '../img/trash.svg';
import { options } from './constants/content';

const ParaphraseTop = () => {
    return (
        <div className="header-bottom">
            <div className="left-side">
                <label htmlFor="dropdown">Density of paraphrasing:</label>
                <select id="dropdown" name="dropdown">
                    {options.map((item) => {
                        return <option value={item.value}>{item.name}</option>
                    })}
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