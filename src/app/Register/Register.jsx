import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../components/Contexts/UserContext";

const Register = () => {

    const { setIsConnected } = useContext(UserContext);

    const [isPwVisible, setIsPwVisible] = useState(false);
    const [usernameValue, setUsernameValue] = useState("");
    const [mailValue, setMailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    //const [passwordConfirmValue, setPasswordConfirmValue] = useState("");

    function registerToNode(e) {
        e.preventDefault();

        fetch('http://192.168.1.33:8000/users/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    username: usernameValue,
                    mail: mailValue,
                    password: passwordValue,
                    // confirm: passwordConfirmValue
                }
            )
        })
            .then(res => {
                return res.json();
            })
            .then(data => {
                if (data.token) {
                    sessionStorage.setItem('userToken', data.token);
                    setIsConnected(true);
                }
                console.log(sessionStorage.getItem("userToken"));
            })
    }

    return (
        <div className="login-page">
            <div className="login-page__card">
                <h1 className="login-page__header"> Inscris toi !</h1>
                <form className="login-page__form" onSubmit={registerToNode}>
                    <input type="text" id="Uname" placeholder="Nom d'utilisateur" required value={usernameValue} onChange={({ currentTarget: { value } }) => setUsernameValue(value)} />
                    <input type="email" id="email" placeholder="Adresse mail" required value={mailValue} onChange={({ currentTarget: { value } }) => setMailValue(value)} />
                    <input type={isPwVisible ? "text" : "password"} name="" id="pwd1" placeholder="Mot de passe" required value={passwordValue} onChange={({ currentTarget: { value } }) => setPasswordValue(value)} />
                    <div className="--viewPassword" onClick={() => setIsPwVisible(!isPwVisible)}></div>
                    {/* <input type="password" name="" id="pwd2" placeholder="Confirmes mot de passe" value={passwordConfirmValue} onChange={({ currentTarget: { value } }) => setPasswordConfirmValue(value)}/> */}
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