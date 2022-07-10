import React from 'react';
import style from './Dialogs.module.css'
import {DialogWith} from "./DialogWith/DialogWith";
import {DialogMessage} from "./DialogMessages/DialogMessages";
import {v1} from "uuid";

const dialogData = [
    {id: v1(), name: 'Сергей Чирик'},
    {id: v1(), name: 'Юра Максимов'},
    {id: v1(), name: 'Виктор Стороженко'},
    {id: v1(), name: 'Артем Богданов'},
]

const messageData = [
    {id: v1(), name: 'Сергей Чирик', message: 'hi'},
    {id: v1(), name: 'Артем Богданов', message: 'how are u?'},
    {id: v1(), name: 'Сергей Чирик', message: 'not bad,and u?'},
    {id: v1(), name: 'Артем Богданов', message: 'tnx, im fine'},
]


export const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialog}>
                <DialogWith id={1} name={'Сергей Чирик'}/>
            </div>
            <div className={style.messages}>
                <DialogMessage name={'Сергей Чирик'} message={'123141'}/>
                <input type="text"/>
            </div>
        </div>
    );
};
