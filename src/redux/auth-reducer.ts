import {ActionTypes} from "../App";

export type authResponseType = {
    userId: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}

export type setAuthDataAT = ReturnType<typeof setAuthData>

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: authResponseType = initialState, action: ActionTypes): authResponseType => {
    switch (action.type) {
        case 'SET-AUTH-DATA' :
            return {
                ...state,
                ...action.data,
                isAuth:true
            }
        default:
            return state
    }
}

export const setAuthData = (data: authResponseType) => ({type: 'SET-AUTH-DATA', data} as const)

