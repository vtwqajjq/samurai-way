import React from 'react';
import style from './Friend.module.css'
import {friendsDataPropsType} from "../Friends";


export const Friend = (props: any) => {
    return (
        <div className={style.friend}>
            <div className={style.avatar}>
                <img src={props.avatar} alt="avatar"/>
            </div>
            <div className={style.friendDescription}>
                <h5>{props.name}</h5>
                <a href="#">Написать сообщение</a>
            </div>
        </div>
    );
};

