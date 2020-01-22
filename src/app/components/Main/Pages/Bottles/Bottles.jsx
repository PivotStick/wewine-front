import React from "react";

import Product from "./Product/Product";

import { motion } from "framer-motion";
import { pageTransition } from "../pageTransition";

const Shop = () => {
    
    return (
        <motion.section
            variants={pageTransition}
            initial="init"
            animate="enter"
            exit="exit"
            transition={pageTransition.transition}
        className="shop-tab">

            <Product bottleData={{
                img: <img src="/img/Jean-Marc_Brocard.png" alt="wewine_product" />,
                name: "Jean-Marc_Brocard"
            }}/>

        </motion.section>
    );
}

export default Shop;