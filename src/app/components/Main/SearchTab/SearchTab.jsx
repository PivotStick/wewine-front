import React, { useContext } from "react";

import { AppContext } from "../../Contexts/AppContext";

import { motion } from "framer-motion";

const searchTab = {
    hidden: {
        y: "-110%"
    },

    visible: {
        y: 0
    }
}

const SearchTab = () => {

    const { isSearchOpen } = useContext(AppContext);

    return (
        <motion.div
            variants={searchTab}
            initial="hidden"
            animate={isSearchOpen ? "visible" : "hidden"}
            transition={{
                duration: 0.75,
                ease: "easeInOut"
            }}

        className="search-tab">
            {isSearchOpen ? "OUVERT" : "PAS OUVERT"}
        </motion.div>
    );
}

export default SearchTab;