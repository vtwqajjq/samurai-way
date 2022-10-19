import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import {store} from "./redux/redux-store";


let state = store.getState()

ReactDOM.render(
    <Provider store={store}>
        <App state={state} dispatch={store.dispatch.bind(store)}/>
    </Provider>,
    document.getElementById('root')
);
