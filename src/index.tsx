import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./redux/redux-store";


let state = store.getState()

let rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={state} dispatch = {store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}


rerenderEntireTree()
store.subscribe(()=>{
    let state = store.getState();
    rerenderEntireTree()
})