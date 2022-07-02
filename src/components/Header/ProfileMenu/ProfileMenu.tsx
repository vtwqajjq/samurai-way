import React from 'react';
import style from "./ProfileMenu.module.css"

type ProfileMenuPropsType = {
    name: string
    img: string
}

export const ProfileMenu = (props: ProfileMenuPropsType) => {
    return (
        <div className={style.profileMenu}>
            <h5>{props.name}</h5>
            <img src={props.img} alt="Mini avatar"/>
        </div>
    );
};
