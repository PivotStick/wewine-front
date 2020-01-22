import React from "react";

import { motion } from "framer-motion";

const Modal = ({ content, handleCloseModal, header, maxWidth = "60%", minWidth = "55%" }) => {

    return (
        <motion.div onClick={e => { if (e.currentTarget === e.target) { handleCloseModal(false) } }}

            initial={{ scale: 0, opacity: 0, y: -100 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}

        className="modal-wewine">
            <div style={{ maxWidth, minWidth }} className="modal-wewine__card">
                <span onClick={_ => handleCloseModal(false)} className="modal-wewine__close">&times;</span>
                <h1 className="modal-wewine__title">{header}</h1>
            { content && content }
            </div>
        </motion.div>
    )
}

export default Modal;