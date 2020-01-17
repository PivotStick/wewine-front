import React, { useRef, useContext } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";

import { AppContext } from "../Contexts/AppContext";
import { AnimatePresence } from "framer-motion";

import SearchTab from "./SearchTab/SearchTab";

import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Cave from "./Pages/Cave/Cave";
import Account from "./Pages/Account/Account";


const Main = () => {

    const location = useLocation();
    const mainElement = useRef(null);

    const { isSearchOpen, setIsHeaderS } = useContext(AppContext);

    const handleScroll = (event) => {
        const scrollY = event.currentTarget.scrollTop;

        const pathname = window.location.pathname;
        
        if (!isSearchOpen) {
            if (pathname === "/shop" || pathname === "/home") {
                setIsHeaderS((scrollY > 0));
            }
        }
    }

    if (isSearchOpen) {
        mainElement.current.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <main className={isSearchOpen ? "content --not-scrollable" : "content"}
            onScroll={handleScroll}
            ref={mainElement}
        >
            <SearchTab />
            <AnimatePresence>
                <Switch location={location} key={location.pathname}>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/shop" component={Shop} />
                    <Route exact path="/cave" component={Cave} />
                    <Route exact path="/account" component={Account} />
                </Switch>
            </AnimatePresence>
            <Redirect from="/" to="/home" />
        </main>
    );
}

export default Main;