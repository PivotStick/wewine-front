import React, { useContext } from 'react';

import ReturnContent from "../ReturnContent";

import { UserContext } from "../../../../Contexts/UserContext";

const PersonalInfos = ({ changeTab }) => {

    const { firstname, lastname, mail } = useContext(UserContext);


    return (
        <div className="personal-tab">
            <ReturnContent changeTab={changeTab} newTab="" />
            {/* <div className="personal-card">          
                <div className="personal-card__section">
                    <h1>Mon compte</h1>
                    
                    <div className="personal-card__section__article">
                        <p>Nom : <span> {lastname} </span></p>
                        <p>Prénom : <span>{firstname} </span></p>
                        <p>Adresse mail : <span>{mail} </span></p>
                        <p>Nombre de cave(s) : <span>1</span></p>
                        <p>Nombre de bouteilles totale : <span>12</span></p>
                    </div>

                </div>
            </div> */}


        </div>
    );
}

export default PersonalInfos;