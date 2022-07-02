import React from 'react';
import style from "./Profile.module.css"
import {CountModule} from "./CountModule/CountModule";

type ProfilePropsType = {
    img: string
    name: string
    birthday: string
    city: string
    followers: number
    photos: number
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={style.profile}>
            <div className={style.avatar}>
                <img src={props.img} alt="Avatar"/>
                <button>Добавить в друзья</button>
            </div>
            <div className={style.info}>
                <h1>{props.name}</h1>
                <div className={style.personInfo}>
                    <p>День рождения:<span>{props.birthday}</span></p>
                    <p>Город:<span>{props.city}</span></p>
                </div>
                <CountModule followers={props.followers} name={'подписчика'}/>
                {/*<CountModule photos={props.photos} name={'фотографии'}/>*/}
            </div>
        </div>
    );
};
