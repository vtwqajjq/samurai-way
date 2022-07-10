import React from 'react';
import style from './DialogWith.module.css'
import {NavLink} from "react-router-dom";

type DialogWithPropsType = {
    name: string
    id: number
}

export const DialogWith = (props: DialogWithPropsType) => {
    return (
        <div className={style.owner}>
            <NavLink to={'/dialogs/'+props.id}>{props.name}</NavLink>
        </div>
    );
};
