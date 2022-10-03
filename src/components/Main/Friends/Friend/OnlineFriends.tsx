import React from 'react';
import style from "./Friend.module.css";
import {FriendType} from "../../../../redux/state";
import {v1} from "uuid";

type OnlineFriendsPropsType = {
    friendsOnline: FriendType[]
}

export const OnlineFriends = (props: OnlineFriendsPropsType) => {
    return (
        <>
            {props.friendsOnline.map((f: FriendType) => {
                    return (
                        <div key={v1()} className={style.friend}>
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
