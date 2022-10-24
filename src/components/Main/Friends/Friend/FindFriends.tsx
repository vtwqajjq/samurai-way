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
}


class FindFriends extends React.Component<any, FindFriendsPropsType> {

    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
                <input placeholder={'Введите имя и фамилию пользователя'} type="text"/>
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