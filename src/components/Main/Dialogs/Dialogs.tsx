import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css'
import {DialogWith} from "./DialogWith/DialogWith";
import {DialogMessage} from "./DialogMessages/DialogMessages";
import {v1} from "uuid";
import {DialogsPageType} from "../Main";

type DialogsPropsType = {
    updateNewMessageText: (body: string)=> void
    addNewTextMessage: ()=> void
    dialogsData: DialogsPageType
    newText: string
}

export const Dialogs = (props: DialogsPropsType) => {
    let dialogs = props.dialogsData.dialogs.map((d) => {
        return <DialogWith key={v1()} id={d.id} name={d.name}/>
    })
    let dialogMessages = props.dialogsData.messages.map((m) => {
        return <DialogMessage key={v1()} id={m.id} name={m.name} message={m.message}/>
    })

    const onClickButtonHandler = () => {
        props.addNewTextMessage()
        props.dialogsData.newMessageText = ''
    }

    const onChangeAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessageText(body)

    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialog}>
                {dialogs}
            </div>
            <div className={style.messages}>
                {dialogMessages}
                <div>
                    <textarea value={props.newText}
                              onChange={onChangeAreaHandler} placeholder={'введите текст сообщения...'}/>
                    <button onClick={onClickButtonHandler}>Отправить</button>
                </div>

            </div>
        </div>
    );
};
