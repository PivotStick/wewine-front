import React from "react";

import { cellars } from "./cellars";

import CaveCard from "./CaveCard/CaveCard";

import { motion } from "framer-motion";
import { pageTransition } from "../pageTransition";

const Cave = () => {

    return (
        <motion.section
            variants={pageTransition}
            initial="init"
            animate="enter"
            exit="exit"
            transition={pageTransition.transition}
        className="cave-tab">            
            
            <h1 className="cave-tab__header">Vos caves</h1>

            <ul className="cave-tab__caves">
            {
                cellars.map(cave => {
                    return <CaveCard
                    name={cave.name}
                    bottles={cave.bottles}
                    maxCount={cave.maxCount} />
                })
            }
            </ul>

        </motion.section>
    );
}

export default Cave;