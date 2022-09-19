import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {subscribe} from "./redux/state";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );
}


rerenderEntireTree()
subscribe(rerenderEntireTree)