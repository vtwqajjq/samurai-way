import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {BrowserRouter as Router} from "react-router-dom";
import {storeType} from "./redux/state";

type AppPropsType = {
    store: storeType
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
                        <Main profilePage={props.store._state.profilePage} friendsPage={props.store._state.friendsPage}
                              dialogsPage={props.store._state.dialogsPage} addPostCallback={props.store.addPost}
                              changeNewTextCallback={props.store.changeNewText}
                        />
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
