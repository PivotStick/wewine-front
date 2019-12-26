import React, { useContext } from "react";

import { AppContext } from "../../../Contexts/AppContext";

import { NavLink } from "react-router-dom"


const Tab = ({ tab }) => {

    const { isSearchOpen, handleSearchOpen } = useContext(AppContext);

    if (tab.link !== "/search") {
        return (
            <NavLink to={tab.link} activeClassName="--currentTab">
                <div
                onClick={_ => { handleSearchOpen(false, tab.setHeaderToSmall) }}
                className="tab">
                    <div className="tab__icon">
                        <svg className="--svg" viewBox="0 0 512 512">
                            {
                                tab.svg.map((path, index) => {
                                    return (
                                        <path key={index} d={path}/>
                                    );
                                })
                            }
                        </svg>
                    </div>
                <div className="tab__name">
                    {tab.name}
                </div>
            </div>
            </NavLink>
        );
    } else {
        return (
            <div
            onClick={_ => {
                handleSearchOpen(
                    !isSearchOpen,
                    !isSearchOpen ?
                    true :
                    (
                        window.location.pathname === "/cave" || window.location.pathname === "/account"
                    )
                );
            }}
            className="tab">
                <div className="tab__icon">
                    <svg className="--svg" viewBox="0 0 512 512">
                        {
                            tab.svg.map((path, index) => {
                                return (
                                    <path key={index} d={path}/>
                                );
                            })
                        }
                    </svg>
                </div>
                <div className="tab__name">
                    {tab.name}
                </div>
            </div>
        );
    }
}

export default Tab;