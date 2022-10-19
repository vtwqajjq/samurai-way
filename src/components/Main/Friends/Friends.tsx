import React from 'react';
import style from './Friends.module.css'
import {NavLink, Route} from "react-router-dom";
import {OnlineFriends} from "./Friend/OnlineFriends";
import {AllFriends} from "./Friend/AllFriends";
import FindFriends from "./Friend/FindFriends";
import {FriendType} from "../../../redux/friends-reducer";
import {FriendsPropsType} from "./FriendsContainer";


export const Friends = (props: FriendsPropsType) => {
    let filteredFriendByOnline = props.friendsPage.friends.filter((f: FriendType) => f.isOnline)
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <NavLink className={(isActive) => isActive ? style.active : ""} to='/friends/all'>Все друзья</NavLink><span>{props.friendsPage.friends.length}</span>
                <NavLink className={(isActive) => isActive ? style.active : ""} to='/friends/online'>Друзья онлайн</NavLink><span>{filteredFriendByOnline.length}</span>
                <NavLink className={(isActive) => isActive ? style.active : ""} to='/friends/find'>Поиск друзей</NavLink>
            </div>
            <div className={style.friends}>
                <Route path='/friends/all' render={() => <AllFriends friendsAll = {props.friendsPage.friends} />}/>
                <Route path='/friends/online' render={() => <OnlineFriends friendsOnline = {filteredFriendByOnline}/>}/><Route path='/friends/find' render={() => <FindFriends users={props.friendsPage.users} follow={props.follow} unfollow={props.unfollow}/>}/>
            </div>
        </div>
    );
};
