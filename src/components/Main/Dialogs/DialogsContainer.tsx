import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css'
import {DialogWith} from "./DialogWith/DialogWith";
import {DialogMessage} from "./DialogMessages/DialogMessages";
import {v1} from "uuid";
import {addNewTextMessageAC, updateNewMessageTextAC} from "../../../redux/dialogs-reducer";
import {DialogsPageType} from "../Main";
import {ActionTypes} from "../../../App";
import {Dialogs} from "./Dialogs";
import {RootState} from "../../../redux/redux-store";

type DialogsPropsType = {
    store: RootState
    dispatch: (action: ActionTypes) => void
}

export const DialogsContainer = (props: DialogsPropsType) => {
    let dialogsData = props.store.dialogsReducer
    let newText = props.store.dialogsReducer.newMessageText

    const onClickButtonHandler = () => {
        props.dispatch(addNewTextMessageAC(newText.trim()))
        props.store.dialogsReducer.newMessageText = ''
    }

    const onChangeAreaHandler = (body: string) => {
        props.dispatch(updateNewMessageTextAC(body))
    }


    return <Dialogs updateNewMessageText={onChangeAreaHandler} addNewTextMessage={onClickButtonHandler} dialogsData={dialogsData} newText={newText}/>
};
