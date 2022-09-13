import React from 'react';
import style from './DialogWith.module.css'
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../../redux/state";


export const DialogWith = (props: DialogType) => {
    return (
        <div className={style.owner}>
            <NavLink to={'/dialogs/'+props.id}>{props.name}</NavLink>
        </div>
    );
};
