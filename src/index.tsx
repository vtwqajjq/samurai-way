import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./redux/redux-store";
import {Provider} from "./StoreContext";



let state = store.getState()

let rerenderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
        , document.getElementById('root')
    );
}


rerenderEntireTree()
store.subscribe(() => {
    rerenderEntireTree()
})