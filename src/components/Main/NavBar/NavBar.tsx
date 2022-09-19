import React from 'react';
import {NavigationItem} from "./NavigationItem/NavigationItem";
import style from "./NavBar.module.css"
//Logos
import news from "../../../assets/img/svg/News.svg"
import messages from "../../../assets/img/svg/Messages.svg"
import friends from "../../../assets/img/svg/Friends.svg"
import groups from "../../../assets/img/svg/Groups.svg"
import music from "../../../assets/img/svg/Music.svg"
import photos from "../../../assets/img/svg/Photos.svg"
import home from "../../../assets/img/svg/Home.svg"


export const NavBar = () => {
    return (
        <div className={style.navigationItem}>
            <NavigationItem link='/profile' logo={home} name={'Моя страница'}/>
            <NavigationItem link='/news' logo={news} name={'Новости'}/>
            <NavigationItem link='/dialogs' logo={messages} name={'Сообщения'}/>
            <NavigationItem link='/friends/all' logo={friends} name={'Друзья'}/>
            <NavigationItem link='/groups' logo={groups} name={'Сообщества'}/>
            <NavigationItem link='/music' logo={music} name={'Музыка'}/>
            <NavigationItem link='/photos' logo={photos} name={'Фотографии'}/>
        </div>
    );
};

