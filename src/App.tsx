import React from 'react';
import './App.css';
import {Main} from "./components/Main/Main";
import {BrowserRouter as Router} from "react-router-dom";
import {AddPostActionType, ChangeNewTextPostActionType, SetUserProfileAT} from "./redux/profile-reducer";
import {AddNewTextMessageAT, UpdateNewMessageAT} from "./redux/dialogs-reducer";
import {RootStateType} from "./redux/redux-store";
import {
    ChangeCurrentPageAT,
    ChangePageSizeAT,
    FollowAT,
    SetUsersAT,
    SetUsersCountAT,
    toggleIsFetchingAT,
    UnfollowAT
} from "./redux/friends-reducer";
import {setAuthDataAT} from "./redux/auth-reducer";
import HeaderContainer from "./components/Header/HeaderContainer";

export type ActionTypes =
    AddPostActionType
    | ChangeNewTextPostActionType
    | UpdateNewMessageAT
    | AddNewTextMessageAT
    | FollowAT
    | UnfollowAT
    | SetUsersAT
    | ChangeCurrentPageAT
    | SetUsersCountAT
    | ChangePageSizeAT
    | toggleIsFetchingAT
    | SetUserProfileAT
    | setAuthDataAT

type AppPropsType = {
    state: RootStateType
    dispatch: (action: ActionTypes) => void
}

function App(props: AppPropsType) {
    return (
        <Router>
            <div className="App">
                <div className='header'>
                    <div className='container'>
                        <HeaderContainer/>
                    </div>
                </div>
                <div className="main">
                    <div className="container">
                        <Main state={props.state} dispatch={props.dispatch}
                        />
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
