import {v1} from "uuid";
import {ActionTypes, DialogsPageType, MessageType} from "./state";

export type UpdateNewMessageAT = ReturnType<typeof updateNewMessageTextAC>
export type AddNewTextMessageAT = ReturnType<typeof addNewTextMessageAC>

export const dialogsReducer = (state: DialogsPageType, action: ActionTypes) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT' :
            state.newMessageText = action.text
            return state;
        case "ADD-NEW-MESSAGE-TEXT":
            let newMessage: MessageType = {
                id: v1(),
                name: "Я",
                message: action.newMessage,
            }
            state.messages.push(newMessage)
            return state
        default:
            return state
    }
}

export const updateNewMessageTextAC = (text: string) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', text: text} as const)
export const addNewTextMessageAC = (text: string) => ({type: 'ADD-NEW-MESSAGE-TEXT', newMessage: text} as const)
