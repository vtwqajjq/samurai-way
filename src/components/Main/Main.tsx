import React from 'react';
import {NavBar} from "./NavBar/NavBar";
import {Profile} from "./Profile/Profile";
import style from "./Main.module.css"
import {Dialogs} from "./Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./News/News";
import {Photos} from "./Photos/Photos";
import {Friends} from "./Friends/Friends";
import {Groups} from "./Groups/Groups";
import {Music} from "./Music/Music";
import {ActionTypes, DialogsPageType, FriendsPageType, ProfilePageType,} from "../../redux/state";

type MainPropsType = {
    profilePage: ProfilePageType
    friendsPage: FriendsPageType
    dialogsPage: DialogsPageType
    dispatch: (action: ActionTypes) => void
}

export const Main = (props: MainPropsType) => {
    return (
        <BrowserRouter>
            <div className={style.main}>
                <NavBar/>
                <Route path='/profile' render={() => <Profile
                    profileData={props.profilePage} dispatch={props.dispatch}
                />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/dialogs'
                       render={() => <Dialogs dialogsData={props.dialogsPage} dispatch={props.dispatch}/>}/>
                <Route path='/friends/' render={() => <Friends friendsData={props.friendsPage}/>}/>
                <Route path='/groups' render={() => <Groups/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/photos' render={() => <Photos/>}/>
            </div>
        </BrowserRouter>
    );
};

