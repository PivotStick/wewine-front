import React, { useEffect, useState } from 'react';
import ReturnContent from "../ReturnContent";
import { Link } from 'react-router-dom';
import Modal from "../../Modal";
import { motion, AnimatePresence } from "framer-motion";


const PersonalInfos = ({ changeTab }) => {
    
    const [isUModalVisible, setIsUModalVisible] = useState('');
    const [isDModalVisible, setIsDModalVisible] = useState('');

    const [infosUsers, setInfosUsers] = useState({});

    const [newNameInput, setNewNameInput] = useState("");
    const [newMailInput, setNewMailInput] = useState("");

    const getInfoUser = () => {
        
        fetch('http://127.0.0.1:8000/users/getInfo', {
            method: 'GET', 
            headers: {

                "Authorization": "Bearer " + localStorage.getItem("userToken")
            }
        })
        .then(res => res.json())
        .then(infosUsers => {
            console.log(infosUsers);
            setInfosUsers(infosUsers);
        })
    }
   

    const updateUserInfos = _ => {
        fetch("http://localhost:8000/users/update", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("userToken")
            },
            body: JSON.stringify([
                { "propName": "username", "value": newNameInput },
                { "propName": "mail", "value": newMailInput }
            ])
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            getInfoUser();
        })
    }

    const handelModalSubmit = e => {
        e.preventDefault();
        setIsUModalVisible(false);
        updateUserInfos();
    }

    const deleteUser = () => {
        fetch('http://127.0.0.1:8000/users/delete', {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("userToken")
            }
        })
            .then(res => {
                return res.json();
            })
            .then(data => {
                localStorage.removeItem("userToken");
                window.location.reload();
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
                        <p>Nombre de cave(s) : <span>{infosUsers.cellarCount}</span></p>
                        <p>Nombre de bouteilles totale : <span>12</span></p>
                        
                        <div className="personal-card__section__article__btn">
                            <motion.button 
                                whileHover={{ scale: 1.04, y: -8}}

                                onClick={_ => setIsUModalVisible(true)} id="btnUpdate"> Modifier votre compte
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.04, y: -8}}

                                onClick={_ => setIsDModalVisible(true)}

                                id="btnDelete">Supprimer votre compte</motion.button>
                        </div>
                    </div>
                    
                    <AnimatePresence>
                        {
                            isUModalVisible && <Modal content={


                                <div className="content">
                                    <form onSubmit={handelModalSubmit}>
                                        <input type="text" placeholder="Nom d'ulisateur " value={newNameInput} onChange={e => setNewNameInput(e.currentTarget.value)} />
                                        <input type="email" placeholder="Email" value={newMailInput} onChange={e => setNewMailInput(e.currentTarget.value)}/>
                                
                                        <button >Modifier</button>
                                    </form>
                                </div>
                            }
                            handleCloseModal={setIsUModalVisible}
                            header="Modifier votre profil" />
                        }

                    </AnimatePresence>

                    <AnimatePresence>
                        {
                            isDModalVisible && <Modal content= {

                                <div className="content">
                                    <p>Vous êtes sur le point de supprimer votre compte, vous perdez vos caves, mais aussi les bouteilles enregistrées dans celle-ci. Êtes-vous sur de vouloir continuer ?</p>
                                    <div className="content__btn">
                                        <Link to="/">
                                            <button className="--btn" onClick={deleteUser}>Oui, supprimer mon compte</button>
                                        </Link>
                                        <button className="--btn" onClick={_ => setIsDModalVisible(false)}>Non, annuler</button>
                                    </div>
                                </div>

                            }
                            handleCloseModal={setIsDModalVisible}
                            header="Supprimer votre" />
                        }

                    </AnimatePresence>
                </div>
            </div>
           

        </div>
    );
}

export default PersonalInfos;