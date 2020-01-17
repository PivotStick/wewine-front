import React, { useState } from "react";

import { motion } from "framer-motion";
import { pageTransition } from "../pageTransition";

import LandingPage from "./LandingPage/LandingPage";
import Premium from "./Premium/Premium";
import PersonalInfos from "./PersonalInfos/PersonalInfos";
import FavoriteWinners from "./FavoriteWinners/FavoriteWinners";


const Account = () => {

    const [currentTab, setCurrentTab] = useState("");

    return (
        <motion.section
            variants={pageTransition}
            initial="init"
            animate="enter"
            exit="exit"
            transition={pageTransition.transition}
            className="account-tab">
            <div className="account-tab__bg"></div>
            {
                currentTab === "premium" ?
                <Premium changeTab={setCurrentTab}/>
                : currentTab === "favoriteWinners" ?
                <FavoriteWinners changeTab={setCurrentTab}/>
                : currentTab === "personalInfos" ?
                <PersonalInfos changeTab={setCurrentTab}/>
                :
                <LandingPage changeTab={setCurrentTab} />
            }
        </motion.section>
    );
}

export default Account;