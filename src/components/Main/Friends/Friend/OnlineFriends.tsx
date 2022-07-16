import React, {useState} from 'react';
import style from "./Friend.module.css";
import {friendsDataPropsType} from "../Friends";


export const OnlineFriends = (props: any) => {
    let filteredFriendByOnline = props.friendsData.filter((f: friendsDataPropsType) => f.isOnline)

    return (
        filteredFriendByOnline.map((f: friendsDataPropsType)=> {
                return (
                    <div className={style.friend}>
                        <div className={style.avatar}>
                            <img src={f.avatar} alt="avatar"/>
                        </div>
                        <div className={style.friendDescription}>
                            <h5>{f.name}</h5>
                            <a href="#">Написать сообщение</a>
                        </div>
                    </div>
                )
            }
        )
    )
};
