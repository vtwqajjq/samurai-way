import React from 'react';
import style from './DialogMessage.module.css'
import {MessageType} from "../../Main";


export const DialogMessage = (props: MessageType) => {
    return (
        <div className={style.dialogMessage}>
            <div className={style.interlocutor}><h4>{props.name}</h4></div>
            <div className={style.text}>{props.message}</div>
        </div>
    );
};
