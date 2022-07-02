import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";

function App() {
    return (
        <div className="App">
            <div className='header'>
                <div className='container'>
                    <Header/>
                </div>
            </div>
            <div className="main">
                <div className="container">
                    <Main />
                </div>
            </div>
        </div>
    );
}

export default App;
