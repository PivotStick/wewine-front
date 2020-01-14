import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../components/Contexts/UserContext";

const Login = () => {

    const { setIsConnected, setFirstname, setLastname, setMail } = useContext(UserContext);

    const [mailValue, setMailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const connectToSymfony = e => {
        e.preventDefault();

        fetch('http://127.0.0.1:8000/api/login', {
            method: "POST",
            body: JSON.stringify(
                {
                    mail: mailValue,
                    password: passwordValue
                }

            )
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data)
            setFirstname(data.userInfos.firstname);
            setLastname(data.userInfos.lastname);
            setMail(data.userInfos.mail);
            setIsConnected(data.success);
        })
    }

    return (
        <div className="login-page">
            <div className="login-page__card">
                <h1 className="login-page__header">Se connecter</h1>
                <form className="login-page__form" onSubmit={connectToSymfony}>
                    <input type="email" placeholder="Email" value={mailValue} onChange={({ currentTarget: { value } }) => setMailValue(value)} />
                    <input type="password" placeholder="Mot de passe" value={passwordValue} required onChange={({ currentTarget: { value } }) => setPasswordValue(value)} />
                    <button>C'est parti !</button>
                </form>
            </div>
            <div className="login-page__footer">
                <div>
                    <span>Tu souhaites nous rejoindre ?</span>
                    <Link to="/register">C'est par là !</Link>
                </div>
            </div>
        </div>
    )
}

export default Login;