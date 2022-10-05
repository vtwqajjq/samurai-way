import React from 'react';
import style from './Friend.module.css'
import {FriendType} from "../../../../redux/store";
import {v1} from "uuid";


type AllFriendsProps = {
    friendsAll: FriendType[]
}
export const AllFriends = (props: AllFriendsProps) => {
    return (
        <>
            {props.friendsAll.map((el: FriendType) => {
                let id = v1()
                return (
                    <div key={id} className={style.friend}>
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
            }
        </>
    )
};

