import React, {useState} from 'react';
import style from "./Friend.module.css";
import {FriendsPageType, FriendType} from "../../../../redux/state";

type OnlineFriendsPropsType = {
    friendsOnline: FriendType[]
}

export const OnlineFriends = (props: OnlineFriendsPropsType) => {
    return (
        <>
            {props.friendsOnline.map((f: FriendType) => {
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
            )}
        </>
    )
};
