import React from 'react';
import style from './Friends.module.css'
import {NavLink, Route} from "react-router-dom";
import {OnlineFriends} from "./Friend/OnlineFriends";
import {AllFriends} from "./Friend/AllFriends";
import {FriendsPageType, FriendType, UserType} from "../../../redux/friends-reducer";
import FindFriends from "./Friend/FindFriends";
import Preloader from "../../common/Preloader/Preloader";


type FriendsPropsType = {
    friendsPage: FriendsPageType
    follow: (id: string) => void
    unfollow: (id: string) => void
    setUsers: (users: UserType[]) => void
    changeCurrentPage: (pageNumber: number) => void
    setUsersCount: (usersCount: number) => void
    changePageSize: (pageSize: string | null) => void
    changePageNumber: (pageNumber: number) => void
}

export const Friends = (props: FriendsPropsType) => {
    let filteredFriendByOnline = props.friendsPage.friends.filter((f: FriendType) => f.isOnline)
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <NavLink className={(isActive) => isActive ? style.active : ""} to='/friends/all'>Все
                    друзья</NavLink><span>{props.friendsPage.friends.length}</span>
                <NavLink className={(isActive) => isActive ? style.active : ""} to='/friends/online'>Друзья
                    онлайн</NavLink><span>{filteredFriendByOnline.length}</span>
                <NavLink className={(isActive) => isActive ? style.active : ""} to='/friends/find'>Поиск
                    друзей</NavLink>
            </div>
            <div className={style.friends}>
                <Route path='/friends/all' render={() => <AllFriends friendsAll={props.friendsPage.friends}/>}/>
                <Route path='/friends/online'
                       render={() => <OnlineFriends friendsOnline={filteredFriendByOnline}/>}/><Route
                path='/friends/find'
                render={() => {
                    return (
                        <>
                            {props.friendsPage.isFetching ? <Preloader /> :
                                <FindFriends users={props.friendsPage.users} follow={props.follow}
                                             unfollow={props.unfollow} setUsers={props.setUsers}
                                             pageSize={props.friendsPage.pageSize}
                                             totalUsersCount={props.friendsPage.totalUsersCount}
                                             currentPage={props.friendsPage.currentPage}
                                             changeCurrentPage={props.changeCurrentPage}
                                             setUsersCount={props.setUsersCount}
                                             changePageSize={props.changePageSize}
                                             changePageNumber={props.changePageNumber}/>}

                        </>
                    )
                }}/>
            </div>
        </div>
    );
};
