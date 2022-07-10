import React from 'react';
import style from './DialogMessage.module.css'

type DialogMessagesPropsType = {
    name: string
    message: string
}

export const DialogMessage = (props: DialogMessagesPropsType) => {
    return (
        <div className={style.dialogMessage}>
            <div className={style.interlocutor}><h4>{props.name}</h4></div>
            <div className={style.text}>{props.message}</div>
        </div>
    );
};
