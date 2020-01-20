import React, { useState, useEffect } from "react";    

import CaveCard from "./CaveCard/CaveCard";
import Modal from "../Modal";

import { motion, AnimatePresence } from "framer-motion";
import { pageTransition } from "../pageTransition";

const Cave = () => {

    const [nameValue, setNameValue] = useState('');

    const [isCModalVisible, setIsCModalVisible] = useState(false);
    const [isDModalVisible, setIsDModalVisible] = useState(false);
    const [isUModalVisible, setIsUModalVisible] = useState(false);

    const [newNameInput, setNewNameInput] = useState("");
    const [currentCellarId, setCurrentCellarId] = useState("");

    const [cellars, setCellars] = useState([]);

    useEffect(() => {
        fetchCellars();
    }, []);

    const createCellar = () => {

        fetch('http://127.0.0.1:8000/cellars/create', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("userToken")
            },
            body: JSON.stringify(
                {
                    name: nameValue,
                }
            )
        })
            .then(res => {
                return res.json();
            })
            .then(data => {
                fetchCellars();
            })
    }

    const fetchCellars = () => {
        fetch("http://localhost:8000/cellars", {
            headers: { "Authorization": "Bearer " + localStorage.getItem("userToken")} 
        })
        .then(res => res.json())
        .then(data => setCellars(data.cellars))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        createCellar();
        setNameValue("");
        setIsCModalVisible(false);
    }

    const handleModalSubmit = e => {
        e.preventDefault();

        setIsUModalVisible(false);
        updateCellar();
    }

    const deleteCellar = () => {
        setIsDModalVisible(false);

        fetch("http://localhost:8000/cellars/" + currentCellarId, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("userToken")
            }
        })
        .then(res => res.json())
        .then(data => fetchCellars());

        setCurrentCellarId("");
    }

    const updateCellar = () => {
        fetch("http://localhost:8000/cellars/" + currentCellarId, {
            method: "PATCH",
            headers: { "Content-Type": "application/json", "Authorization": "Bearer " + localStorage.getItem("userToken") },
            body: JSON.stringify([
                { "propName": "name", "value": newNameInput }
            ])
        })
        .then(res => res.json())
        .then(data => fetchCellars())
        
        setCurrentCellarId("");
    }

    return (
        <motion.section
            variants={pageTransition}
            initial="init"
            animate="enter"
            exit="exit"
            transition={pageTransition.transition}
        className="cave-tab">         

            <div className="cave-tab__header">
                <div className="cave-tab__bg"></div>
                <h1 className="cave-tab__title">Les caves</h1>
                <p className="cave-tab__content">Ici tu peux gérer tes caves, en créer, les modifier, ou les supprimer</p>
                <motion.button 

                    whileHover={{ scale: 1.04, y: -8 }}

                onClick={_ => setIsCModalVisible(true)} className="cave-tab__add-cellar">Créer une cave</motion.button>
            </div>

            <ul className="cave-tab__caves">
            <AnimatePresence>
            {
                cellars.map(cave => {
                    return <CaveCard
                    key={cave._cellarId}
                    cellarId={cave._cellarId}
                    name={cave.name}
                    bottles={cave.bottles}
                    maxCount={cave.maxCount}
                    openDeleteModal={setIsDModalVisible}
                    openUpdateModal={setIsUModalVisible}
                    setCurrentId={setCurrentCellarId} />
                })
            }
            </AnimatePresence>
            <AnimatePresence>
            {
                isDModalVisible && <Modal content={

                    <div className="modal-delete">
                        <p>Vous êtes sur le point de supprimer votre cave, vous perdrez toutes les données, ainsi que les bouteilles enregistrées dedans. Êtes-vous sur de vouloir continuer ?</p>
                        <div className="modal-delete__btn">
                            <button className="modal-delete__btn --deleteBtn" onClick={deleteCellar}>Oui, supprimer cette cave</button>
                            <button className="modal-delete__btn --cancelBtn" onClick={_ => setIsDModalVisible(false)}>Non, annuler</button>
                        </div>
                    </div>
                    
                }
                handleCloseModal={setIsDModalVisible}
                header="Supprimer une cave" />
            }
            </AnimatePresence>
            <AnimatePresence>
            {
                isUModalVisible && <Modal content={
                    <form onSubmit={handleModalSubmit}>
                        <input value={newNameInput} onChange={e => setNewNameInput(e.currentTarget.value)} type="text" placeholder="Nouveau nom de la cave"/>

                        <button>Modifier</button>
                    </form>
                }
                handleCloseModal={setIsUModalVisible}
                header="Modifier une cave" />
            }
            </AnimatePresence>
            </ul>
            <AnimatePresence>
            {
                isCModalVisible && <Modal content={
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Nom de la cave" value={nameValue} onChange={({ currentTarget: { value } }) => setNameValue(value)} />

                        <button>Créer</button>
                    </form>
                }
                handleCloseModal={setIsCModalVisible}
                header="Créer une cave" />
            }
            </AnimatePresence>
        </motion.section>
    );
}

export default Cave;