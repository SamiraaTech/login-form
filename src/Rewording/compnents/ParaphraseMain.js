import React from 'react';
import Filter from '../img/filter.svg';
import Export from '../img/export.svg';
import Upload from '../img/upload_icon.svg';

const ParaphraseMain = ({ messageLeft,setMessageLeft, messageRight, handleClick }) => {    
    return (
        <section className="paraphrase-boxes">
            <div className="left-box">
                <form className="para-form" onSubmit={handleClick}>
                    <div className="para-txt">
                        <textarea id="paraphrase-txt"
                        value={messageLeft} onChange={(e) => setMessageLeft(e.target.value)}
                            placeholder="Rewording is going to paraphrase your text by writing or posting something here, only you need is hit the paraphrase button." >
                        </textarea>
                    </div>
                    <div className="bottom-content">
                        <div className="charachters">
                            <span className="numbers">
                                0/10000
                            </span>
                            <span className="char-txt">
                                charachters
                            </span>
                        </div>

                        <button className="btn-para" type="submit" value="submit">Paraphrase</button>

                        <div className="bottom-icons-right">
                            <img className="filter-icon" src={Filter} alt="filter icon" />
                            <img className="upload-icon" src={Upload} alt="filter icon" />
                        </div>
                    </div>
                </form>
            </div>
            <div className="right-box">
                <section className="message-right">
                    <p className="moved-txt">{messageRight}</p>
                </section>
                <div className="bottom-container">
                    <div className="charachters-right">
                        <span className="numbers">
                            0/10000
                        </span>
                        <span className="char-txt">
                            charachters
                        </span>
                    </div>
                    <div className="bottom-icons-left">
                        <img className="Export-icon" src={Export} alt="Export icon" />
                        <img className="upload-icon" src={Filter} alt="filter icon" />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default ParaphraseMain;