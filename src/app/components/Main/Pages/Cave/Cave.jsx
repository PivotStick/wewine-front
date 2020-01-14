import React, { useState } from "react";

import { motion } from "framer-motion";
import { pageTransition } from "../pageTransition";

import CardCave from './CardCave/CardCave';
import InsideCave from "./InsideCave/InsideCave";

const Cave = () => {

    const [currentTab, setCurrentTab] = useState("")

    const displayContent = (tab) => {
        switch (tab) {
            case "cardCave":
                return <InsideCave changeTab={setCurrentTab}/>;
        
            default:
                return <CardCave changeTab={setCurrentTab} /> ;
        }
    }

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
                {displayContent(currentTab)}
            </div>

        </motion.section>
    );
}

export default Cave;