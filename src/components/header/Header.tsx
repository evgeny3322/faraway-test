import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./Header.module.css"
import Favorite from "./Favorite/Favorite";

const Header = () => {

    const styleLinks = (NavData: { isActive: boolean }) => {
        return NavData.isActive ? `${style.itemLink} ${style.active}` : style.itemLink;
    };

    return (
        <div className={style.header}>
            <NavLink className={(NavData) => styleLinks(NavData)} to={'/home'}>
                Home
            </NavLink>

            <NavLink className={(NavData) => styleLinks(NavData)} to={'/people/?page=1'}>
                Person
            </NavLink>

            <NavLink className={(NavData) => styleLinks(NavData)} to={'/search'}>
                Search
            </NavLink>

            <Favorite/>

        </div>
    );
};

export default Header;