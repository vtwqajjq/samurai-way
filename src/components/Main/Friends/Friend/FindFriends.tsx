import React from 'react';
import style from "./Friend.module.css";
import {v1} from "uuid";
import {UserType} from "../../../../redux/friends-reducer";
import empty from "../../../../assets/img/jpg/pustaya-ava.jpg";
import {NavLink} from "react-router-dom";
import {Pagination} from "../../../common/Pagination/Pagination";

type FindFriendsPropsType = {
    users: UserType[]
    follow: (id: string) => void
    unfollow: (id: string) => void
    setUsers: (users: UserType[]) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    changeCurrentPage: (pageNumber: number) => void
    setUsersCount: (usersCount: number) => void
    changePageSize: (pageSize: string | null) => void
    changePageNumber: (pageNumber: number) => void
}


const FindFriends = (props: FindFriendsPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div className={style.search}>
                <input placeholder={'Введите имя и фамилию пользователя'} type="text"/>
                <div className={style.displayUsersAmount}>
                    <div onClick={(e) => {
                        props.changePageSize(e.currentTarget.textContent)
                    }} className={style.block}>10
                    </div>
                    <div onClick={(e) => {
                        props.changePageSize(e.currentTarget.textContent)
                    }} className={style.block}>20
                    </div>
                    <div onClick={(e) => {
                        props.changePageSize(e.currentTarget.textContent)
                    }} className={style.block}>100
                    </div>
                </div>
            </div>

            {/*<div className={style.pages}>
                {pages.map(p => <span key={v1()} onClick={() => {
                    props.changePageNumber(p)
                }} className={props.currentPage === p ? style.active : ''}>{p}</span>)}
            </div>*/}
            <Pagination currentPage={props.currentPage} pageSize={props.pageSize} siblingCount={2} totalCount={props.totalUsersCount} onPageChange={props.changePageNumber}/>
            {props.users.map((u: UserType) => {
                return (
                    <div key={v1()} className={style.friend}>
                        <div className={style.avatar}>
                            <NavLink to={'/profile/'+u.id}>
                                <img src={u.photos.small != null ? u.photos.small : empty} alt="avatar"/>
                            </NavLink>
                        </div>
                        <div className={style.friendDescription}>
                            <h5>{u.name}</h5>
                            <p>{u.status}</p>
                            {u.followed ?
                                <button onClick={() => props.unfollow(u.id)}>Удалить из друзей</button> :
                                <button onClick={() => props.follow(u.id)}>Добавить в друзья</button>}
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default FindFriends;