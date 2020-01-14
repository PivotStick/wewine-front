import React from 'react';
import bottle from '../../../../../../assets/bottle.png';

const CardBottle = () => {
    
    return (
        <div className="boutel__card" >

            <div className="boutel__card__article">
                <img className="boutel__card__article__img" src={bottle} alt="" />
                <div className="boutel__card__article__name">
                    <h3>Nom de bouteille</h3>
                    <h4>Nom de domaine</h4>
                </div>
                <button className="boutel__card__article__btn">Ouvrir</button>
            </div>
        </div>
    );
}

export default CardBottle;
