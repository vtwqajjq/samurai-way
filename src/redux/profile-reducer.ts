import {v1} from "uuid";
import {ActionTypes, PostType, ProfilePageType} from "./state";

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type ChangeNewTextPostActionType = ReturnType<typeof changeNewTextActionCreator>

export const profileReducer = (state: ProfilePageType, action: ActionTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            let today = new Date();
            let newPost: PostType = {
                id: v1(),
                text: action.postMessage,
                date: today.toISOString().substring(0, 10),
                time: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
            }
            state.posts.push(newPost)
            return state;
        case 'CHANGE-NEW-TEXT' :
            state.newPostText = action.newText
            return state;
        default:
            return state
    }
}

export const addPostActionCreator = (text: string) => ({type: "ADD-POST", postMessage: text} as const)
export const changeNewTextActionCreator = (text: string) => ({type: "CHANGE-NEW-TEXT", newText: text} as const)