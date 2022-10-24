import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import {store} from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";


let state = store.getState()

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
