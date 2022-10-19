import React from 'react';
import style from "./Profile.module.css"
import {CountModule} from "./CountModule/CountModule";
import {ProfilePageType} from "../Main";
import {ActionTypes} from "../../../App";
import PostsContainer from "./Posts/PostsContainer";

type ProfilePropsType = {
    profileData: ProfilePageType
    dispatch: (action: ActionTypes) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={style.profile}>
            <div className={style.avatar}>
                <img src={props.profileData.profile.img} alt="Avatar"/>
                <button>Добавить в друзья</button>
            </div>
            <div className={style.info}>
                <h1>{props.profileData.profile.name}</h1>
                <div className={style.personInfo}>
                    <p>День рождения:<span>{props.profileData.profile.birthday}</span></p>
                    <p>Город:<span>{props.profileData.profile.city}</span></p>
                </div>
                <CountModule followers={props.profileData.profile.followers} name={'подписчик(-а)'}/>
                <PostsContainer/>
                {/*<CountModule photos={props.photos} name={'фотографии'}/>*/}
            </div>
        </div>
    );
};
