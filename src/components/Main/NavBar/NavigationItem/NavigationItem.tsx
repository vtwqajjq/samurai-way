import React from 'react';
import style from "./NavigationItem.module.css"
import {NavLink} from "react-router-dom";

type NavigationItemPropsType = {
    name: string
    logo:string
    link: string
}

export const NavigationItem = (props: NavigationItemPropsType) => {
    return (
        <div className={style.navItem}>
            <img src={props.logo} alt="logos"/>
            <NavLink className={(isActive) => isActive ? style.active : ""} to={props.link}>{props.name}</NavLink>
        </div>
    );
};
