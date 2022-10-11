import React from 'react';
import {NavBar} from "./NavBar/NavBar";
import {Profile} from "./Profile/Profile";
import style from "./Main.module.css"
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./News/News";
import {Photos} from "./Photos/Photos";
import {Friends} from "./Friends/Friends";
import {Groups} from "./Groups/Groups";
import {Music} from "./Music/Music";
import {ActionTypes} from "../../App";
import {DialogsContainer} from "./Dialogs/DialogsContainer";
import {RootState} from "../../redux/redux-store";

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
export type FriendType = {
    id: string
    name: string
    avatar: string
    isOnline: boolean
}
export type ProfileType = {
    img: string
    name: string
    birthday: string
    city: string
    followers: number
    photos: number
}


export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[],
    newMessageText: string
}
export type FriendsPageType = {
    friends: FriendType[]
}
export type ProfilePageType = {
    profile: ProfileType
    posts: PostType[]
    newPostText: string
}

export type MainPropsType = {
    state: RootState
    dispatch: (action: ActionTypes) => void
}

export const Main = () => {
    return (
        <BrowserRouter>
            <div className={style.main}>
                <NavBar/>
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/news' render={() => <News/>}/>
                {/*<Route path='/dialogs'
                       render={() => <DialogsContainer store={props.state} dispatch={props.dispatch}/>}/>
                <Route path='/friends/' render={() => <Friends friendsData={props.state.friendsReducer}/>}/>*/}
                <Route path='/groups' render={() => <Groups/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/photos' render={() => <Photos/>}/>
            </div>
        </BrowserRouter>
    );
};

