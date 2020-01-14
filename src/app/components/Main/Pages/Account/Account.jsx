import React, { useState } from "react";


import { motion } from "framer-motion";
import { pageTransition } from "../pageTransition";

import LandingPage from "./LandingPage/LandingPage";
import Premium from "./Premium/Premium";
import PersonalInfos from "./PersonalInfos/PersonalInfos";
import FavoriteWinners from "./FavoriteWinners/FavoriteWinners";


const Account = () => {

    const [currentTab, setCurrentTab] = useState("");

    const displayContent = (tab) => {
        switch (tab) {
            case "premium":
                return <Premium changeTab={setCurrentTab} />;

            case "personalInfos":
                return <PersonalInfos changeTab={setCurrentTab}/>;
            
                case "favoriteWinners":
                return <FavoriteWinners changeTab={setCurrentTab}/>;
        
            default:
                return <LandingPage changeTab={setCurrentTab} />;
        }
    }

    return (
        <motion.section
            variants={pageTransition}
            initial="init"
            animate="enter"
            exit="exit"
            transition={pageTransition.transition}
            className="account-tab">
            <div className="account-tab__bg"></div>
            {displayContent(currentTab)}
        </motion.section>
    );
}

export default Account;