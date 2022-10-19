import React from 'react';
import {UserType} from "../../../../redux/friends-reducer";
import style from "./Friend.module.css";

type FindFriendsPropsType = {
    users: UserType[]
    follow: (id: string) => void
    unfollow: (id:string)=> void
}

const FindFriends = (props: FindFriendsPropsType) => {
    return (
        <div>
            <input placeholder={'Введите имя и фамилию пользователя'} type="text"/>
            {props.users.map(u => {
                return (
                    <div key={u.id} className={style.friend}>
                        <div className={style.avatar}>
                            <img src={u.avatar} alt="avatar"/>
                        </div>
                        <div className={style.friendDescription}>
                            <h5>{u.name}</h5>
                            <p>{u.profileStatus}</p>
                            {u.isFriend ? <button onClick={() => props.unfollow(u.id)}>Удалить из друзей</button> :
                                <button onClick={() => props.follow(u.id)}>Добавить в друзья</button>}
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default FindFriends;