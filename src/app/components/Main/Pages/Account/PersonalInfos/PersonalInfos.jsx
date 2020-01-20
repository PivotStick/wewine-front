import React, { useEffect, useState } from 'react';
import ReturnContent from "../ReturnContent";
const PersonalInfos = ({ changeTab }) => {

    const [infosUsers, setInfosUsers] = useState({});

    const [usernameValue, setUsernameValue] = useState("");
    const [mailValue, setMailValue] = useState(""); 

    const getInfoUser = () => {
        
        fetch('http://127.0.0.1:8000/users/getInfo', {
            method: 'GET', 
            headers: {

                "Authorization": "Bearer " + localStorage.getItem("userToken")
            }
        })
        .then(res => res.json())
        .then(infosUsers => {
            //console.log(infosUsers);
            setInfosUsers(infosUsers);
        })
    }

    const updateUserInfos = () => {
        fetch('http://127.0.0.1:8000/users/update', {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("userToken")
            },
            body: JSON.stringify([
                { 'propsName': 'username', 'value': usernameValue },
                { 'propsName': 'mail', 'value': mailValue }
            ])
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    const deleteUser = () => {
        fetch('http://127.0.0.1:8000/users/delete', {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("userToken")
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    useEffect(getInfoUser, []);

    return (
        <div className="personal-tab">
            <ReturnContent changeTab={changeTab} newTab="" />
            <div className="personal-card">          
                <div className="personal-card__section">
                    <h1>Mon compte</h1>
                    
                    <div className="personal-card__section__article">
                        <p>Nom d'ulisateur : <span> {infosUsers.username} </span></p>
                        <p>Adresse mail : <span> {infosUsers.mail} </span></p>
                        <p>Nombre de cave(s) : <span>{infosUsers.cellar}</span></p>
                        <p>Nombre de bouteilles totale : <span>12</span></p>
                        
                        <div className="personal-card__section__article__btn">
                            <button id="btnUpdate">Modifier votre compte</button>
                            <button id="btnDelete">Suprimer votre compte</button>
                        </div>
                    </div>

                    <div id="modalUpdate" className="modalUpdate">
                        <div className="modal-content">
                            <div className="header">
                                <span className="header__close">&times;</span>
                                <h1 className="header__title">Modifier votre profil</h1>
                            </div>

                            <div className="content">
                                <form>
                                    <input type="text" placeholder="Nom d'ulisateur " value={usernameValue} onChange={({ currentTarget: { value } }) => setUsernameValue(value)} />
                                    <input type="email" placeholder="Email" value={mailValue} onChange={({ currentTarget: { value } }) => setMailValue(value)} />
                              
                                    <button onClick={updateUserInfos}>Modifier</button>
                                </form>

                            </div>
                        </div>
                    </div>

                    <div className="modalDelete">
                        <div className="content">
                                <div className="modal-content">
                                    <div className="header">
                                        <span className="header__close">&times;</span>
                                        <h1 className="header__title"> Supprimer votre compte </h1>
                                    </div>

                                    <div className="content">
                                        <p>Vous êtes sur le point de supprimer votre compte, vous perdez vos caves, mais aussi les bouteilles enregistrées dans celle-ci. Êtes-vous sur de vouloir continuer ?</p>
                                        <div className="content__btn">
                                        <button onClick={deleteUser}>Oui, supprimer mon compte</button>
                                        <button>Non, annuler</button>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
           

        </div>
    );
}

export default PersonalInfos;