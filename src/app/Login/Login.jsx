import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../components/Contexts/UserContext";

const Login = () => {

    const { setIsConnected } = useContext(UserContext);

    const [mailValue, setMailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const connectToSymfony = e => {
        e.preventDefault();

        fetch('http://127.0.0.1:8000/users/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
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
                if (data.token) {
                    localStorage.setItem('userToken', data.token);
                    setIsConnected(true);
                }
            })
    }

    return (
        <div className="login-page">
            <div className="login-page__card">
                <h1 className="login-page__header">Se connecter</h1>
                <form className="login-page__form" onSubmit={connectToSymfony}>
                    <input type="email" placeholder="Email" required value={mailValue} onChange={({ currentTarget: { value } }) => setMailValue(value)} />
                    <input type="password" placeholder="Mot de passe" required value={passwordValue} onChange={({ currentTarget: { value } }) => setPasswordValue(value)} />
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