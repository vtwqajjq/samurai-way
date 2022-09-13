import React from 'react';
import style from './Dialogs.module.css'
import {DialogWith} from "./DialogWith/DialogWith";
import {DialogMessage} from "./DialogMessages/DialogMessages";
import {DialogsPageType} from "../../../redux/state";

type DialogsPropsType = {
    dialogsData: DialogsPageType
}

export const Dialogs = (props: DialogsPropsType) => {
    let dialogs = props.dialogsData.dialogs.map((d)  => {
        return <DialogWith id={d.id} name={d.name}/>
    })
    let dialogMessages = props.dialogsData.messages.map((m) => {
        return <DialogMessage id={m.id} name={m.name} message={m.message}/>
    })

    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    const onClickButtonHandler = () => {
        alert(newMessageElement.current?.value)
    }


    return (
        <div className={style.dialogs}>
            <div className={style.dialog}>
                {dialogs}
            </div>
            <div className={style.messages}>
                {dialogMessages}
                <div>
                    <textarea ref={newMessageElement}/>
                    <button onClick={onClickButtonHandler}>Отправить</button>
                </div>

            </div>
        </div>
    );
};
