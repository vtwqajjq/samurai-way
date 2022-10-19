import React, {Dispatch} from 'react';
import {addNewTextMessageAC, updateNewMessageTextAC} from "../../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";
import {DialogsPageType} from "../Main";

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchToPropsType = {
    updateNewMessageText: (body: string) => void
    addNewTextMessage: () => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsReducer
    }
}

let mapDispatchToProps = (dispatch: Dispatch<any>): MapDispatchToPropsType => {
    return {
        updateNewMessageText: (body: string) => {
            dispatch(updateNewMessageTextAC(body))
        },
        addNewTextMessage: () => {
            dispatch(addNewTextMessageAC())
        }

    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)