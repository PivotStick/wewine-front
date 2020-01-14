import React, { useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppContext } from "./components/Contexts/AppContext";
import { UserContext } from "./components/Contexts/UserContext";

import LandingPage from "./LandingPage/LandingPage";
import Login from "./Login/Login";
import Register from "./Register/Register";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";


const App = _ => {

    const [isConnected, setIsConnected] = useState(true);
    const [firstname, setFirstname] = useState("");
    const [mail, setMail] = useState("");
    const [lastname, setLastname] = useState("");

    const [isHeaderS, setIsHeaderS] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleSearchOpen = (newValue, setHeaderToSmall) => {

        setIsHeaderS(setHeaderToSmall);
        setIsSearchOpen(newValue);

    }

    if (isConnected) {
        return (
            <div className="app">
                <AppContext.Provider value={{
                    isSearchOpen,
                    handleSearchOpen,
                    isHeaderS,
                    setIsHeaderS,
                }}>
                    <UserContext.Provider value={{
                        firstname,
                        lastname,
                        mail
                    }}>
                        <Router>
                            <Header />
                            <Main />
                        </Router>
                    </UserContext.Provider>
                </AppContext.Provider>
            </div>
        );
    } else {
        return (
            <div className="app-landing">
                <div className="app-landing__bg"></div>
                <UserContext.Provider value={{
                    setIsConnected,
                    setFirstname,
                    setLastname,
                    setMail
                }}>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={LandingPage}/>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/register" component={Register}/>
                        </Switch>
                    </Router>
                </UserContext.Provider>
            </div>
        );
    }
}

export default App;