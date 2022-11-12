import React from 'react';
import {NavBar} from "./NavBar/NavBar";
import {Profile} from "./Profile/Profile";
import style from "./Main.module.css"
import {Route} from "react-router-dom";
import {News} from "./News/News";
import {Photos} from "./Photos/Photos";
import {Groups} from "./Groups/Groups";
import {Music} from "./Music/Music";
import {ActionTypes} from "../../App";
import {DialogsContainer} from "./Dialogs/DialogsContainer";
import {RootStateType} from "../../redux/redux-store";
import FriendsContainer from "./Friends/FriendsContainer";
import ProfileContainer from "./Profile/ProfileContainer";

export type DialogType = {
    id: string
    name: string
}
export type PostType = {
    id: string
    text: string
    date: string
    time: string
}
export type MessageType = {
    id: string
    name: string
    message: string
}
export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string | null
        large: string
    }
} | null


export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[],
    newMessageText: string
}
export type ProfilePageType = {
    profile: ProfileType
    posts: PostType[]
    newPostText: string
}

type MainPropsType = {
    state: RootStateType
    dispatch: (action: ActionTypes) => void
}

export const Main = (props: MainPropsType) => {
    return (
        <div className={style.main}>
            <NavBar/>
            <Route path='/profile' render={() => <ProfileContainer
            />}/>
            <Route path='/news' render={() => <News/>}/>
            <Route path='/dialogs'
                   render={() => <DialogsContainer/>}/>
            <Route path='/friends/' render={() => <FriendsContainer/>}/>
            <Route path='/groups' render={() => <Groups/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/photos' render={() => <Photos/>}/>
        </div>
    );
};

