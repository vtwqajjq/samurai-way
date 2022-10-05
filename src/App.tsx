import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {BrowserRouter as Router} from "react-router-dom";
import {ActionTypes} from "./redux/store";

type AppPropsType = {
    state: any
    dispatch: (action: ActionTypes) => void
}

function App(props: AppPropsType) {
    console.log(props)
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
                        <Main profilePage={props.state.profileReducer} friendsPage={props.state.friendsReducer}
                              dialogsPage={props.state.dialogsReducer} dispatch = {props.dispatch}
                        />
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
