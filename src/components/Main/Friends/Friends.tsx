import React from 'react';
import style from './Friends.module.css'
import {NavLink, Route} from "react-router-dom";
import {OnlineFriends} from "./Friend/OnlineFriends";
import {AllFriends} from "./Friend/AllFriends";
import {FriendsPageType, FriendType} from "../Main";

type FriendsPropsType = {
    friendsData: FriendsPageType
}

export const Friends = (props: FriendsPropsType) => {
    let filteredFriendByOnline = props.friendsData.friends.filter((f: FriendType) => f.isOnline)
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <NavLink className={(isActive) => isActive ? style.active : ""} to='/friends/all'>Все друзья</NavLink><span>{props.friendsData.friends.length}</span>
                <NavLink className={(isActive) => isActive ? style.active : ""} to='/friends/online'>Друзья онлайн</NavLink><span>{filteredFriendByOnline.length}</span>
            </div>
            <div className={style.friends}>
                <Route path='/friends/all' render={() => <AllFriends friendsAll = {props.friendsData.friends} />}/>
                <Route path='/friends/online' render={() => <OnlineFriends friendsOnline = {filteredFriendByOnline}/>}/>
            </div>
        </div>
    );
};
