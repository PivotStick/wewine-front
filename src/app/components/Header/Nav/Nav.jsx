import React, { useContext } from "react";

import { AppContext } from "../../Contexts/AppContext";
import { motion } from "framer-motion";

import Tab from "./Tab/Tab";

import { tabs } from "./icons";

const Nav = () => {

    const { isHeaderS } = useContext(AppContext);

    return (
        <motion.nav
            animate={{
                paddingTop: isHeaderS ? 16 : 0,
                transition: {
                    duration: .75,
                    ease: "easeInOut"
                }
            }}

        className="nav">
            <motion.div
                animate={{
                    y: "-50%",
                    x: isHeaderS ? "-80%" : "-145%",
                    opacity: isHeaderS ? 1 : 0,
                    transition: {
                        duration: .75,
                        ease: "easeInOut"
                    }
                }}

            className="nav__logo">
                <svg className="--svgBottle" viewBox="0 0 369.73 90.2">
                    <path className="cls-1" d="M254.64,90.05l13.9-25.3a17.16,17.16,0,0,0-12.5-5.6c-7.9,0-14.3,6.7-14.3,6.7Z" transform="translate(-0.14 -59.05)"/>
                    <path className="cls-1" d="M291,107.85l-14.6,26.8s7.5,14.4,20.7,14.4,18.9-10.8,29.3-30.8S345,78,348.94,77.55s8.6,20,15.4,23.9,5.7-1.1,5-6.1-7.5-36.3-28.6-36.3-23.9,20.2-29.6,32.7-11.4,28.9-13.9,28.9S291,107.85,291,107.85Z" transform="translate(-0.14 -59.05)"/>
                    <path className="cls-2" d="M203.34,104.15c-2.6,5.6-4.8,10.7-6.8,15.2,0,0-14.3-28.9-20-41.1s-11.1-19.2-21.8-19.2H136s30.8,57.7,38.6,72,12.2,18,21.5,18,14.3-6.5,20.7-17.9Z" transform="translate(-0.14 -59.05)"/>
                    <path className="cls-2" d="M290.74,59.15c-10.7,0-16.1,7-21.8,19.2s-20,41.1-20,41.1-15.7-33.9-22.5-45.7-15-14.4-18.9-14.6a16,16,0,0,0-8,1.6c-3.5,1.7-6.8,6.5-6.8,6.5s5.5,11,11.6,21.2c3.7,6.2,7.1,13.2,16.4,31.4s16.4,29.4,26.8,29.4,15.4-3.7,23.2-18,33.9-63.9,33.9-63.9S301.44,59.15,290.74,59.15Z" transform="translate(-0.14 -59.05)"/>
                    <path className="cls-3" d="M151.54,127.55c-6.6-12-28.2-53.9-35.1-67.3-18.2,2.8-22.1,10.3-25,16.4-3.6,7.6-1,14.4-25.7,14.4H19.14v-1.9h-9V91c-8.6-.1-10,1-10,13.1s1.4,13.2,10,13.2v1.8h9.1v-1.9h46.6c24.8,0,22.1,6.7,25.7,14.4s8.8,17.5,42.1,17.5h30.3C159.24,141.45,154.74,133.35,151.54,127.55Z" transform="translate(-0.14 -59.05)"/>
                </svg>
            </motion.div>
            {
                tabs.map(tab => {
                    return (
                        <Tab key={tab.name} tab={tab} />
                    );
                })
            }
            <motion.div
                animate={{
                    width: isHeaderS ? "125%" : "100%",
                    transition: {
                        duration: .75,
                        ease: "easeInOut"
                    }
                }}

            className="nav__underline"></motion.div>
        </motion.nav>
    );
}

export default Nav;