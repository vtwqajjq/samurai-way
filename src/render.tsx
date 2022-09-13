import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );
}

