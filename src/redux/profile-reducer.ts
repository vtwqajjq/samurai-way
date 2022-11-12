import {v1} from "uuid";
import {PostType, ProfilePageType, ProfileType} from "../components/Main/Main";
import {ActionTypes} from "../App";

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type ChangeNewTextPostActionType = ReturnType<typeof changeNewTextActionCreator>
export type SetUserProfileAT = ReturnType<typeof setUserProfile>

let initialState: ProfilePageType = {
    profile: null,
    posts: [],
    newPostText: ''
}

export const profileReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case 'ADD-POST': {
            let today = new Date();
            let newPost: PostType = {
                id: v1(),
                text: action.postMessage,
                date: today.toISOString().substring(0, 10),
                time: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case 'CHANGE-NEW-TEXT' :
            return {
                ...state,
                newPostText: action.newText
            };
        case "SET-USER-PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}

export const addPostActionCreator = (text: string) => ({type: "ADD-POST", postMessage: text} as const)
export const changeNewTextActionCreator = (text: string) => ({type: "CHANGE-NEW-TEXT", newText: text} as const)
export const setUserProfile = (profile: ProfileType) => ({type: "SET-USER-PROFILE", profile} as const)