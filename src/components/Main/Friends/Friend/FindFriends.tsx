import React from 'react';
import {UserType} from "../../../../redux/friends-reducer";
import style from "./Friend.module.css";
import axios from "axios";
import empty from "../../../../assets/img/jpg/pustaya-ava.jpg";
import {v1} from "uuid";

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
    changePageSize: (pageSize: number) => void
}


class FindFriends extends React.Component<any, FindFriendsPropsType> {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setUsersCount(response.data.totalCount)
            })
    }

    changePageNumber = (pageNumber: number) => {
        this.props.changeCurrentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    changePageSize = (pageSize: string | null) => {
        pageSize && this.props.changePageSize(+pageSize)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=${pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
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
                            this.changePageSize(e.currentTarget.textContent)
                        }} className={style.block + ' ' + style.active}>5
                        </div>
                        <div onClick={(e) => {
                            this.changePageSize(e.currentTarget.textContent)
                        }} className={style.block}>10
                        </div>
                        <div onClick={(e) => {
                            this.changePageSize(e.currentTarget.textContent)
                        }} className={style.block}>20
                        </div>
                        <div onClick={(e) => {
                            this.changePageSize(e.currentTarget.textContent)
                        }} className={style.block}>100
                        </div>
                    </div>
                </div>

                <div className={style.pages}>
                    {pages.map(p => <span key={v1()} onClick={() => {
                        this.changePageNumber(p)
                    }} className={this.props.currentPage === p ? style.active : ''}>{p}</span>)}
                </div>
                {this.props.users.map((u: UserType) => {
                    return (
                        <div key={v1()} className={style.friend}>
                            <div className={style.avatar}>
                                <img src={u.photos.small != null ? u.photos.small : empty} alt="avatar"/>
                            </div>
                            <div className={style.friendDescription}>
                                <h5>{u.name}</h5>
                                <p>{u.status}</p>
                                {u.followed ?
                                    <button onClick={() => this.props.unfollow(u.id)}>Удалить из друзей</button> :
                                    <button onClick={() => this.props.follow(u.id)}>Добавить в друзья</button>}
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default FindFriends;