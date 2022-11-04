import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {BrowserRouter as Router} from "react-router-dom";
import {AddPostActionType, ChangeNewTextPostActionType} from "./redux/profile-reducer";
import {AddNewTextMessageAT, UpdateNewMessageAT} from "./redux/dialogs-reducer";
import {RootStateType} from "./redux/redux-store";
import {
    ChangeCurrentPageAT,
    ChangePageSizeAT,
    FollowAT,
    SetUsersAT,
    SetUsersCountAT, toggleIsFetchingAT,
    UnfollowAT
} from "./redux/friends-reducer";

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
                        <Header/>
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
