import React from 'react';
import style from "./Profile.module.css"
import {CountModule} from "./CountModule/CountModule";
import {ProfilePageType} from "../../../redux/state";
import Posts from "./Posts/Posts";

type ProfilePropsType = {
    profileData: ProfilePageType
    addPostCallback: (postMessage: string) => void
    changeNewTextCallback: (newText: string) => void
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
                <Posts postsData={props.profileData.posts} addPostCallback={props.addPostCallback}
                       changeNewTextCallback={props.changeNewTextCallback}
                />
                {/*<CountModule photos={props.photos} name={'фотографии'}/>*/}
            </div>
        </div>
    );
};
