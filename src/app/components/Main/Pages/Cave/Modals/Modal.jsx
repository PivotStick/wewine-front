import React from "react";

import { motion, AnimatePresence } from "framer-motion";

const bgVariant = {
    open: {
        opacity: 1
    },

    closed: {
        opacity: 0,
        transition: {
            delay: .5
        }
    }
}

const modalVariant = {
    open: {
        scale: 1
    },

    closed: {
        scale: 0,
        transition: {
            ease: "anticipate",
            duration: 0.75
        }
    }
}

const Modal = ({ isOpen, setIsOpen, style = {}, params = {} }) => {

    // --
    const {

        corners = "2rem",
        maxWidth = 75

    } = style;

    const {

        header = "Modal's header",
        content = "My modal content"

    } = params;

    // --
    const onBackgroundClick = e => {
        if (e.currentTarget === e.target) setIsOpen(false);
    }

    return (
        <AnimatePresence>
        {
            isOpen && (
                <motion.div onClick={onBackgroundClick}
                
                    variants={bgVariant}
                    initial="closed"
                    animate="open"
                    exit="closed"
                
                style={{

                    position: "fixed",
                    top: 0,
                    left: 0,
                    backgroundColor: "#00000055",
                    width: "100vw",
                    height: "100vh",
                    zIndex: 25,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"

                }}>
                    <motion.div
                    
                        variants={modalVariant}

                    style={{

                        backgroundColor: "white",
                        borderRadius: corners,
                        padding: "2rem",
                        maxWidth: `${maxWidth}vw`,
                        minWidth: "25vw"

                    }}>
                        <div style={{ display: "flex", marginBottom: "2rem" }}>
                            <svg

                            style={{
                                cursor: "pointer"
                            }}

                            onClick={() => setIsOpen(false)} height="1.5rem" viewBox="0 0 25 25">
                                <path stroke="black" strokeWidth="3" strokeLinecap="round" d="M 2 2 L 23 23" />
                                <path stroke="black" strokeWidth="3" strokeLinecap="round" d="M 2 23 L 23 2" />
                            </svg>
                            <h1 style={{ textAlign: "center", width: "100%" }}>{header}</h1>
                        </div>

                        <div
                        style={{

                            margin: "0 2rem"

                        }}>
                            {content}
                        </div>
                    </motion.div>
                </motion.div>
            )
        }
        </AnimatePresence>
    );
};

export default Modal;