import React from 'react';
import {NavBar} from "./NavBar/NavBar";
import {Profile} from "./Profile/Profile";
import style from "./Main.module.css"
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./News/News";
import {Photos} from "./Photos/Photos";
import {Groups} from "./Groups/Groups";
import {Music} from "./Music/Music";
import {ActionTypes} from "../../App";
import {DialogsContainer} from "./Dialogs/DialogsContainer";
import {RootStateType} from "../../redux/redux-store";
import FriendsContainer from "./Friends/FriendsContainer";

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
        <BrowserRouter>
            <div className={style.main}>
                <NavBar/>
                <Route path='/profile' render={() => <Profile
                    profileData={props.state.profileReducer} dispatch={props.dispatch}
                />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/dialogs'
                       render={() => <DialogsContainer />}/>
                <Route path='/friends/' render={() => <FriendsContainer/>}/>
                <Route path='/groups' render={() => <Groups/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/photos' render={() => <Photos/>}/>
            </div>
        </BrowserRouter>
    );
};

