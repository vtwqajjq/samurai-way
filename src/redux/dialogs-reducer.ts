import {v1} from "uuid"
import {DialogsPageType, MessageType} from "../components/Main/Main";
import {ActionTypes} from "../App";

export type UpdateNewMessageAT = ReturnType<typeof updateNewMessageTextAC>
export type AddNewTextMessageAT = ReturnType<typeof addNewTextMessageAC>

let initialState = {
    dialogs: [
        {id: v1(), name: 'Сергей Чирик'},
        {id: v1(), name: 'Юра Максимов'},
        {id: v1(), name: 'Виктор Стороженко'},
        {id: v1(), name: 'Артем Богданов'},
    ],
    messages: [
        {id: v1(), name: 'Я', message: 'hi'},
        {id: v1(), name: 'Артем Богданов', message: 'how are u?'},
        {id: v1(), name: 'Я', message: 'not bad,and u?'},
        {id: v1(), name: 'Артем Богданов', message: 'tnx, im fine'},
    ],
    newMessageText: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionTypes): DialogsPageType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT' :
            return {
                ...state,
                newMessageText: action.text
            }
        case "ADD-NEW-MESSAGE":
            let newMessage: MessageType = {
                id: v1(),
                name: "Я",
                message: state.newMessageText,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }
        default:
            return state
    }
}

export const updateNewMessageTextAC = (text: string) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', text: text} as const)
export const addNewTextMessageAC = () => ({type: 'ADD-NEW-MESSAGE'} as const)
