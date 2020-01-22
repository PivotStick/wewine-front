import React, { useContext } from "react";

import { motion } from "framer-motion";
import { AppContext } from "../Contexts/AppContext";

import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
// import NavResponsive from "./NavResponsive/NavResponsive";

const header = {
    small: {
        paddingTop: 0,
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"
    },

    normal: {
        paddingTop: 16,
        boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.2)"
    }
}

const Header = () => {

    const { isHeaderS } = useContext(AppContext);

    return (
        <motion.header
            variants={header}
            animate={isHeaderS ? "small" : "normal"}
            transition={{
                duration: 1.25,
                ease: "easeInOut"
            }}

        className="header">
            <Logo />
            <Nav />
            {/* <NavResponsive/> */}
        </motion.header>
    );
}

export default Header;