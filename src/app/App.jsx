import React, { useState } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { AppContext } from "./components/Contexts/AppContext";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = _ => {

    const [isHeaderS, setIsHeaderS] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleSearchOpen = (newValue, setHeaderToSmall) => {

        console.log(setHeaderToSmall);
        setIsHeaderS(setHeaderToSmall);
        setIsSearchOpen(newValue);
    }

    return (
        <div className="app">
            <AppContext.Provider value={{ isSearchOpen, handleSearchOpen, isHeaderS, setIsHeaderS }}>
                <Router>
                    <Header />
                    <Main />
                </Router>
            </AppContext.Provider>
        </div>
    );
}

export default App;