import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {BrowserRouter as Router} from "react-router-dom";
import {ActionTypes, RootStateType} from "./redux/state";

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
                        <Main profilePage={props.state.profilePage} friendsPage={props.state.friendsPage}
                              dialogsPage={props.state.dialogsPage} dispatch = {props.dispatch}
                        />
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
