import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css'
import {DialogWith} from "./DialogWith/DialogWith";
import {DialogMessage} from "./DialogMessages/DialogMessages";
import {ActionTypes, DialogsPageType,} from "../../../redux/state";
import {v1} from "uuid";
import {addNewTextMessageAC, updateNewMessageTextAC} from "../../../redux/dialogs-reducer";

type DialogsPropsType = {
    dialogsData: DialogsPageType
    dispatch: (action: ActionTypes) => void
}

export const Dialogs = (props: DialogsPropsType) => {
    let dialogs = props.dialogsData.dialogs.map((d) => {
        return <DialogWith key={v1()} id={d.id} name={d.name}/>
    })
    let dialogMessages = props.dialogsData.messages.map((m) => {
        return <DialogMessage key={v1()} id={m.id} name={m.name} message={m.message}/>
    })

    let newText = props.dialogsData.newMessageText

    const onClickButtonHandler = () => {
        props.dispatch(addNewTextMessageAC(newText.trim()))
        props.dialogsData.newMessageText = ''
    }

    const onChangeAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageTextAC(e.currentTarget.value))
    }


    return (
        <div className={style.dialogs}>
            <div className={style.dialog}>
                {dialogs}
            </div>
            <div className={style.messages}>
                {dialogMessages}
                <div>
                    <textarea value={newText}
                              onChange={onChangeAreaHandler} placeholder={'введите текст сообщения...'}/>
                    <button onClick={onClickButtonHandler}>Отправить</button>
                </div>

            </div>
        </div>
    );
};
