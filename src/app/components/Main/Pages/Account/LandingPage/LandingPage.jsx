import React from "react";

import { btnIcons } from "./btnIcons";

const Button = ({ paths, text, name, handleClick }) => {

    return (
        <div onClick={() => handleClick(name)} className="account-landing-page__btn">
            
            <div className="--icon">
                <svg id={name} viewBox="0 0 512 512">
                {
                    paths.map((path, i) => {
                        return (
                            <path key={i} d={path}></path>
                        );
                    })
                }
                </svg>
            </div>
            <div className="--text">
                {text}
            </div>
        </div>
    );
}

const LandingPage = ({ changeTab }) => {

    return (
        <div className="account-landing-page">
            <div className="account-landing-page__bg"></div>
            <div className="account-landing-page__content">
                {
                    btnIcons.map(
                        (btn, i) => <Button
                            key={i}
                            handleClick={changeTab}
                            name={btn.name}
                            paths={btn.paths}
                            text={btn.content}/>
                    )
                }
            </div>
        </div>
    );
}

export default LandingPage;