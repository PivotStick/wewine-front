import React, { useEffect, useState} from "react";

import Modal from "../../Modal";
import { AnimatePresence } from "framer-motion";

const CardBottle = ({ bottleId, name, vintage, domain, description, setIsMPOpen }) => {

    const [ isABModalVisible, setIsABModalVisible] = useState("");

    const [cellars, setCellars] = useState([]);
    const [cellarId, setCellarId] = useState("");

    const fetchCellars = () => {
        fetch("http://localhost:8000/cellars", {
            headers: { "Authorization": "Bearer " + localStorage.getItem("userToken")} 
        })
        .then(res => res.json())
        .then(data =>{
            setCellars(data.cellars);
            setCellarId(data.cellars[0]._cellarId);
            
        })
    }

    const addBottle = (e) => {
        e.preventDefault();
        fetch("http://localhost:8000/cellars/addBottle", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("userToken")
            },
            body: JSON.stringify({
                cellarId: cellarId,
                bottleId: bottleId
            })
        })
        .then(res => res.json())
        .then(data =>{
        })
    }

    useEffect(() => fetchCellars(), []);

    return(
        <div className="card-bottle">
            <svg className="card-bottle__svg" viewBox="46 0 256 512">
                <path className="--cls-1" d="M208.329,150.864c-6.848-4.096-11.344-11.232-11.344-19.344c0-4.496,0-8.992,0-13.488h-56.88  c0,4.496,0,8.992,0,13.488c0,8.112-4.512,15.248-11.344,19.344c-21.856,13.104-36.4,36.432-36.4,63.888v272.432  c0,11.04,8.352,20.208,19.312,21.488c37.792,4.448,75.952,4.448,113.744,0c10.96-1.28,19.312-10.448,19.312-21.488V214.752  C244.729,187.296,230.169,163.984,208.329,150.864z"></path>
                <path className="--cls-2" d="M223.353,214.736v272.48c0,11.04-5.92,20.16-13.92,21.44c-10.88,1.76-21.6,2.88-32.64,3.2  c8.16-0.48,16.48-1.44,24.64-3.2c6.4-1.28,11.36-10.4,11.36-21.44v-272.48c0-27.52-8.48-50.72-21.12-63.84  c-4-4.16-6.72-11.2-6.72-19.36v-13.44h4v13.44c0,8.16,3.36,15.2,8.16,19.36C212.953,164.016,223.353,187.216,223.353,214.736z"></path>
                <rect className="--cls-3" x="140.121" y="36.176" width="56.848" height="86.736"></rect>
                <rect className="--cls-4" x="140.121" y="95.136" width="56.848" height="14.096"></rect>
                <path className="--cls-4" d="M201.977,5.296v44.88c0,3.04-2.4,5.456-5.296,5.456h-56.256c-2.88,0-5.296-2.4-5.296-5.456V5.296   c0-2.896,2.4-5.296,5.296-5.296h56.272C199.577,0,201.977,2.4,201.977,5.296z"></path>
                <polygon className="--cls-4" points="244.729,370.208 92.361,460.544 92.361,333.312 244.729,242.976  "></polygon>
                <polygon points="212.793,261.904 212.793,389.136 223.353,382.88    223.353,255.648  "></polygon>
                <path d="M348.793,413.456c-24-3.04-41.76-39.52-37.28-79.2   l10.88-97.44h6.72l-8.48,97.44C317.113,373.296,330.553,409.456,348.793,413.456z"></path>
            </svg>
            <div className="card-bottle__details">
                <h2 className="card-bottle__name">{name} - {vintage}</h2>
                {/* <h3 className="card-bottle__vintage">{vintage}</h3> */}
                <div className="card-bottle__domain">
                    <svg className="--domain-svg" viewBox="0 0 28 28">
                        <path fillRule="evenodd" d="M23.596 18.608V5.483c0-.564-.605-1.042-1.322-1.042h-2.057v3.21a.5.5 0 0 1-.5.5h-3.35a.5.5 0 0 1-.5-.5V4.44h-3.744v3.21a.5.5 0 0 1-.5.5h-3.34a.5.5 0 0 1-.5-.5V4.44H5.726c-.717 0-1.322.478-1.322 1.042v13.125c0 1.785 5.792 4.986 9.587 6.658 4.058-1.942 9.605-5.225 9.605-6.658zM22.274 3.44c1.28 0 2.322.916 2.322 2.042v13.125c0 2.614-8.649 6.839-10.383 7.66a.496.496 0 0 1-.413.007c-1.736-.754-10.396-4.668-10.396-7.667V5.483c0-1.126 1.042-2.042 2.322-2.042h2.557a.5.5 0 0 1 .5.5v3.21h2.34V3.94a.5.5 0 0 1 .5-.5h4.744a.5.5 0 0 1 .5.5v3.21h2.35V3.94a.5.5 0 0 1 .5-.5h2.557zM19.76 18.307c.067-.027.099-.057.104-.066l.003-.747c-.46.086-.962.161-1.482.23l-.008 1.043c.486-.138.956-.289 1.383-.46zm-2.893 1.147l.447-.062.114-8.356c0-.027-.026-.05-.061-.056l-.445-.067-.087.054-.055 8.433s.085.054.087.054zm-2.861.074c.595.002 1.192-.049 1.774-.13v-.004l.008-1.389c-.534.033-1.07.067-1.622.067h-.15a25.353 25.353 0 0 1-1.848-.097l-.008 1.39c.601.096 1.217.16 1.845.163zm-2.934-.108l.088-.054.053-8.434c0-.005 0-.02-.017-.035l-.515.043-.114 8.358.505.122zm-2.963-1.109c.008-.03.061.008.159.04.41.133.85.253 1.303.366l.006-1.049a40.52 40.52 0 0 1-1.32-.18c-.055-.01-.095-.032-.146-.044l-.002.867zm.2-6.397a.452.452 0 0 0-.18.093l-.004.815c.056-.013.103-.036.162-.045.414-.06.869-.11 1.324-.16l.006-1.054a20.56 20.56 0 0 0-1.307.351zm-.188 4.53c.003-.04.097.024.29.054.368.058.774.107 1.172.157l.02-3.03c-.4.045-.806.09-1.172.142-.197.03-.288.096-.309.116l-.004 1.176.002 1.384zm7.715-5.487a12.07 12.07 0 0 0-1.774-.15 13.92 13.92 0 0 0-1.848.142l-.01 1.373c.606-.04 1.222-.066 1.849-.06a25.69 25.69 0 0 1 1.773.09l.009-1.392v-.003zm-3.639 2.38l-.021 3.638a24.69 24.69 0 0 0 1.845.097c.6.006 1.194-.019 1.774-.058l.024-3.663a24.38 24.38 0 0 0-1.772-.089 24.187 24.187 0 0 0-1.85.074zm7.696-1.21c-.003.02-.034-.008-.093-.032a14.48 14.48 0 0 0-1.377-.477l-.006 1.044c.518.074 1.017.155 1.473.246l.003-.78zm-1.483 1.544l-.02 3.044c.454-.062.89-.128 1.294-.204.122-.023.177-.07.189-.084l.006-1.24.003-1.249c0 .026-.058-.023-.181-.048a25.387 25.387 0 0 0-1.291-.219zm1.776-2.499c.44.184.712.55.708.952l-.012 1.82-.009 1.22-.02 3.13c-.002.402-.279.763-.72.941-.584.234-1.229.437-1.91.613a1.054 1.054 0 0 1-.774.535l-.445.062c-.05.007-.1.01-.15.01-.172 0-.333-.053-.484-.129l-.006.002c-.739.133-1.508.2-2.288.2h-.076a12.977 12.977 0 0 1-2.424-.24 1.068 1.068 0 0 1-.49.133 1.29 1.29 0 0 1-.163-.012l-.446-.068a1.064 1.064 0 0 1-.774-.562 21.38 21.38 0 0 1-1.745-.478c-.526-.17-.851-.544-.85-.973l.042-6.407c.005-.429.335-.798.862-.962.55-.17 1.14-.322 1.75-.456.159-.287.436-.505.78-.553l.448-.062c.225-.033.44.03.636.131a13.216 13.216 0 0 1 4.805.014c.006.001.012.006.018.007.194-.092.401-.147.622-.116l.447.068c.343.052.61.264.765.544.677.183 1.32.394 1.902.636z"></path>
                    </svg>
                    <h4>{domain}</h4>
                </div>
                <div className="card-bottle__buttons">
                    <button onClick={_ => setIsMPOpen(name, vintage, domain, description)}>Plus d'infos...</button>
                    <button onClick={_ => setIsABModalVisible(true)}>Ajouter dans une cave</button>
                </div>
            </div>            

            <AnimatePresence>
                {/* Modal d'ajoute de bouteille dans ca cave */}
                {
                    isABModalVisible && <Modal content={

                        <div>
                            <form onSubmit={e => addBottle(e)}>
                                <select className="--wewine-select" onChange={e => setCellarId(e.currentTarget.value)}>
                                    {cellars.map((cellar, i) => {

                                        return <option key={i} value={cellar._cellarId}>{cellar.name}</option>
                                    })}
                                </select>
                                <button onClick={_ => setIsABModalVisible(false)}>Ajouter bouteille</button>
                            </form>
                        </div>
                    }
                    handleCloseModal= {setIsABModalVisible}
                    header="Ajouter une bouteille" />
                }

            </AnimatePresence>



        </div>
    );
}

export default CardBottle;