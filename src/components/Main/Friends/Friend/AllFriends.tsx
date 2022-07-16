import React from 'react';
import style from './Friend.module.css'
import {friendsDataPropsType} from "../Friends";


export const AllFriends = (props: any) => {
    return (
        props.friendsData.map((el:friendsDataPropsType)=> {
            return (
                <div className={style.friend}>
                    <div className={style.avatar}>
                        <img src={el.avatar} alt="avatar"/>
                    </div>
                    <div className={style.friendDescription}>
                        <h5>{el.name}</h5>
                        <a href="#">Написать сообщение</a>
                    </div>
                </div>
            )
        })
    )
};

