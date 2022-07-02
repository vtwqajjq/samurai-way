import React from 'react';
import Bell from "../../../assets/img/svg/Bell.svg"
import style from "./Notification.module.css"

export const Notification = () => {
    return (
        <div className={style.notification}>
            <img src={Bell} alt="Bell"/>
        </div>
    );
};

