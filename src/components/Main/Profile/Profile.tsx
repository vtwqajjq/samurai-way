import React from 'react';
import style from "./Profile.module.css"
import {ProfilePageType} from "../Main";
import PostsContainer from "./Posts/PostsContainer";
import Preloader from "../../common/Preloader/Preloader";

type ProfilePropsType = {
    profileData: ProfilePageType
}

export const Profile = (props: ProfilePropsType) => {
    if (!props.profileData.profile) {
        return <Preloader/>
    }
    return (
        <div className={style.profile}>
            <div className={style.avatar}>
                <img src={props.profileData.profile.photos.large} alt="Avatar"/>
                <button>Добавить в друзья</button>
            </div>
            <div className={style.info}>
                <h1>{props.profileData.profile.fullName}</h1>
                <p>{props.profileData.profile.aboutMe}</p>
                <div className={style.personInfo}>
                    <p>Facebook: <span>{props.profileData.profile.contacts.facebook}</span></p>
                    <p>Website: <span>{props.profileData.profile.contacts.website}</span></p>
                    <p>Twitter: <span>{props.profileData.profile.contacts.twitter}</span></p>
                    <p>Instagram: <span>{props.profileData.profile.contacts.instagram}</span></p>
                    <p>Youtube: <span>{props.profileData.profile.contacts.youtube}</span></p>
                    <p>Instagram: <span>{props.profileData.profile.contacts.github}</span></p>
                </div>
                {/*<CountModule followers={props.profileData.profile.followers} name={'подписчик(-а)'}/>*/}
                <PostsContainer/>
                {/*<CountModule photos={props.photos} name={'фотографии'}/>*/}
            </div>
        </div>
    );
};
