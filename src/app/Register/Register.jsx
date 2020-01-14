import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../components/Contexts/UserContext";

const Register = () => {

    const { setIsConnected, setFirstname, setLastname, setMail } = useContext(UserContext);

    const [firstnameValue, setFirstnameValue] = useState("");
    const [lastnameValue, setLastnameValue] = useState("");
    const [mailValue, setMailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [passwordConfirmValue, setPasswordConfirmValue] = useState("");


    function registerToSymfony(e) {
        e.preventDefault();

        fetch('http://127.0.0.1:8000/api/register', {
            method: "POST",
            body: JSON.stringify(
                {
                    firstname: firstnameValue,
                    lastname: lastnameValue,
                    mail: mailValue,
                    password: passwordValue,
                    confirm: passwordConfirmValue
                }
            )
        })
        .then(res => res.json())
        .then(data => {
            if (!data.error) {
                setIsConnected(true);
                setLastname(data.userInfos.lastname);
                setFirstname(data.userInfos.firstname);
                setMail(data.userInfos.mail);
            }
            console.log(data);
        })
    }

    return (
        <div className="login-page">
            <div className="login-page__card">
                <h1 className="login-page__header"> Inscris toi !</h1>
                <form className="login-page__form" onSubmit={registerToSymfony}>
                    <input type="text" id="Fname" placeholder="Prénom" value={firstnameValue} onChange={({ currentTarget: { value } }) => setFirstnameValue(value)}/>
                    <input type="text" id="Lname" placeholder="Nom" value={lastnameValue} onChange={({ currentTarget: { value } }) => setLastnameValue(value)}/>
                    <input type="email" id="email" placeholder="Adresse mail" value={mailValue} onChange={({ currentTarget: { value } }) => setMailValue(value)}/>
                    <input type="password" name="" id="pwd1" placeholder="Mot de passe" value={passwordValue} onChange={({ currentTarget: { value } }) => setPasswordValue(value)}/>
                    <input type="password" name="" id="pwd2" placeholder="Confirmes mot de passe" value={passwordConfirmValue} onChange={({ currentTarget: { value } }) => setPasswordConfirmValue(value)}/>
                    <button>Inscris toi</button>
                </form>
            </div>
            <div className="login-page__footer">
                <div>
                    <span>Tu as déjà un compte ?</span>
                    <Link to="/login">C'est par ici !</Link>
                </div>
            </div>
        </div>
    )
}

export default Register;