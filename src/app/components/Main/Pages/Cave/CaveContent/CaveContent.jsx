import React, { useState } from "react";

import { AnimatePresence } from "framer-motion";

import Modal from "../Modals/Modal";
import BottleCard from "./BottleCard/BottleCard";

const CaveContent = ({ bottles, caveName, backToCaves, caveId }) => {

    const [bottleList, setBottleList] = useState(bottles);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [modalHeader, setModalHeader] = useState("");
    const [modalContent, setModalContent] = useState(<div>Test</div>);

    const openModal = (header, content) => {
        setModalHeader(header);
        setModalContent(content);

        setIsModalOpen(true);
    }

    const removeBottle = (bottleToRemove) => {

        fetch(`http://localhost:8000/cellars/${caveId}/${bottleToRemove}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("userToken")}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setBottleList(data.result.bottles);
            setIsModalOpen(false);
        });
    }

    return(
        <div className="cave-content">
            <Modal
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}

                style={{
                    maxWidth: 100
                }}

                params={{
                    header: modalHeader,
                    content: (
                        modalContent
                    )
                }}
            />
            <svg onClick={backToCaves} className="content__return --return" viewBox="0 0 400.004 400.004">
                <path d="M382.688,182.686H59.116l77.209-77.214c6.764-6.76,6.764-17.726,0-24.485c-6.764-6.764-17.73-6.764-24.484,0L5.073,187.757   c-6.764,6.76-6.764,17.727,0,24.485l106.768,106.775c3.381,3.383,7.812,5.072,12.242,5.072c4.43,0,8.861-1.689,12.242-5.072   c6.764-6.76,6.764-17.726,0-24.484l-77.209-77.218h323.572c9.562,0,17.316-7.753,17.316-17.315   C400.004,190.438,392.251,182.686,382.688,182.686z" />
            </svg>
            <h1 className="cave-content__name">{caveName}</h1>
            <ol className="cave-content__bottles">
                <AnimatePresence>
                {
                    bottleList.map((bottle, i) => (
                        <BottleCard

                            key={bottle._id + i}

                            openModal={openModal}
                            removeBottle={removeBottle}

                            _id={bottle._id}
                            name={bottle.name}
                            vintage={bottle.vintage}
                            domain={bottle.domain}
                            description={bottle.description}
                        />
                    ))
                }
                </AnimatePresence>
            </ol>
        </div>
    );

}

export default CaveContent;