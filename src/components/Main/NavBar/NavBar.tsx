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
            <NavigationItem logo={home} name={'Моя страница'}/>
            <NavigationItem logo={news} name={'Новости'}/>
            <NavigationItem logo={messages} name={'Сообщения'}/>
            <NavigationItem logo={friends} name={'Друзья'}/>
            <NavigationItem logo={groups} name={'Сообщества'}/>
            <NavigationItem logo={music} name={'Музыка'}/>
            <NavigationItem logo={photos} name={'Фотографии'}/>
        </div>
    );
};

