import React from 'react';
import Filter from '../img/filter.svg';

const ParaphraseMain = () => {
    return (
        <section className="paraphrase-boxes">
            <div className="left-box">
                <form className="para-form">
                    <div className="para-txt">
                        <textarea id="paraphrase-txt" placeholder="Rewording is going to paraphrase your text by writing or posting something here, only you need is hit the paraphrase button." >
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

                        <div className="bottom-icons">
                            <img className="filter-icon" src={Filter} alt="filter icon" />
                            <img className="upload-icon" src={Filter} alt="filter icon" />
                        </div>
                    </div>
                </form>
            </div>
            <div className="right-box">
                <div className="charachters-right">
                    <span className="numbers">
                        0/10000
                    </span>
                    <span className="char-txt">
                        charachters
                    </span>
                </div>
                <div className="bottom-icons">
                            <img className="filter-icon" src={Filter} alt="filter icon" />
                            <img className="upload-icon" src={Filter} alt="filter icon" />
                </div>
            </div>
        </section>
    )
}

export default ParaphraseMain;