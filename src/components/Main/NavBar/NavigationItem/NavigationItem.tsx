import React from 'react';
import style from "./NavigationItem.module.css"

type NavigationItemPropsType = {
    name: string
    logo:string
}

export const NavigationItem = (props: NavigationItemPropsType) => {
    return (
        <div className={style.navItem}>
            <img src={props.logo} alt="logos"/>
            <a href="#">{props.name}</a>
        </div>
    );
};
