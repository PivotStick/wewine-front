import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { pageTransition } from "../pageTransition";

import CardCave from './CardCave/CardCave';
import InsideCave from "./InsideCave/InsideCave";

const Cave = () => {

    const [currentTab, setCurrentTab] = useState("");
    const [cellars, setCellars] = useState([]);

    // const displayContent = (tab, cellar) => {
    //     switch (tab) {
    //         case "cardCave":
    //             return <InsideCave changeTab={setCurrentTab}/>;
        
    //         default:
    //             return <CardCave changeTab={setCurrentTab} data={cellar} /> ;
    //     }
    // };
    

    const getCellar = () => {
    
            fetch('http://127.0.0.1:8000/cellars', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem('userToken')
                }
            })
            .then(res => {
                return res.json();
            })
            .then(cellars => {
                console.log(cellars);
                setCellars(cellars);
            })
    }
 
    useEffect(getCellar, []);


    return (
        <motion.section
            variants={pageTransition}
            initial="init"
            animate="enter"
            exit="exit"
            transition={pageTransition.transition}
            className="cave-tab" >
            {/* <div className="cave-tab__bg"></div> */}
            <div className="cave-tab__content">

                <h1 className="cave-tab__content__h1">CAVE</h1>
                {cellars.map(cellar => <CardCave key={cellar._id} cellar={cellar} changeTab={setCurrentTab} />)}
            </div>

        </motion.section>
    );
}

export default Cave;