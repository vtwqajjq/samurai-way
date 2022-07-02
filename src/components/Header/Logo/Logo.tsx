import React from 'react';
import LogoImg from "../../../assets/img/svg/VKlogo.svg"
import style from "./Logo.module.css"

export const Logo = () => {
    return (
        <div className={style.logoWrapper}>
            <a href="#">
                <img src={LogoImg} alt="VKlogo"/>
            </a>
        </div>
    );
};

