import React, { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { pageTransition } from "../pageTransition";

import Modal from "../Modal";

import CardBottle from "./CardBottle/CardBottle";
import Product from "./Bottle/Product";


const Shop = () => {

    const [listBottles, setListBottles] = useState([]);

    const [isMPOpen, setIsMPOpen] = useState(false);
    const [isMAOpen, setIsMAOpen] = useState(false);

    const [MBName, setMBName] = useState("");
    const [MBVintage, setMBVintage] = useState("");
    const [MBDomain, setMBDomain] = useState("");
    const [MBDescription, setMBDescription] = useState("");
    const [MBColor, setMBColor] = useState(1);

    const getInfosBottles = () => {
        fetch("http://localhost:8000/bottles/", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("userToken")
            }
        })
        .then(res => res.json())
        .then(infosBottles => {
            setListBottles(infosBottles.bottles);
        })
    }
    useEffect(() => getInfosBottles(), [])
    
    const openProductModal = (name, vintage, domain, description, color) => {

        setMBName(name);
        setMBVintage(vintage);
        setMBDomain(domain);
        setMBDescription(description);
        setMBColor(color);

        setIsMPOpen(true);
    }

    return (
        <motion.section
            variants={pageTransition}
            initial="init"
            animate="enter"
            exit="exit"
            transition={pageTransition.transition}
        className="bottles-tab">
            
            <h1 className="bottles-tab__header">Nos bouteilles</h1>
            
            <AnimatePresence>
            {
                isMPOpen &&
                <Modal content={
                    <Product bottleData={{
                        name: MBName,
                        domain: MBDomain,
                        vintage: MBVintage,
                        description: MBDescription,
                        color: MBColor
                    }} />
                }
                handleCloseModal={setIsMPOpen}
                maxWidth="100%"
                minWidth="100%" />
            }
            </AnimatePresence>
            
            <div className="bottles-tab__bottles">
            {
                listBottles.map(({ bottle }) => {
                    return <CardBottle
                        key={bottle._id}
                        bottleId={bottle._id}
                        name={bottle.name}
                        vintage={bottle.vintage}
                        domain={bottle.domain}
                        setIsMPOpen={openProductModal}
                        description={bottle.description}/>
                })
            }
            </div>

        </motion.section>
    );
}

export default Shop;