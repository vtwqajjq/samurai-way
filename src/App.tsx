import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {BrowserRouter as Router} from "react-router-dom";
import {addPost, changeNewText, state} from './redux/state'

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
                        <Main profilePage={state.profilePage} friendsPage={state.friendsPage}
                              dialogsPage={state.dialogsPage} addPostCallback={addPost}
                              changeNewTextCallback={changeNewText}
                        />
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
