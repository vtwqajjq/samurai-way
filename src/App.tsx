import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {BrowserRouter as Router} from "react-router-dom";
import {AddPostActionType, ChangeNewTextPostActionType} from "./redux/profile-reducer";
import {AddNewTextMessageAT, UpdateNewMessageAT} from "./redux/dialogs-reducer";
import {RootState} from "./redux/redux-store";

export type ActionTypes = AddPostActionType | ChangeNewTextPostActionType | UpdateNewMessageAT | AddNewTextMessageAT

function App() {
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
                        <Main/>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
