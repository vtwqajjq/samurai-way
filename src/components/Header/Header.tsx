import React from 'react';
import {Logo} from "./Logo/Logo";
import {ProfileMenu} from "./ProfileMenu/ProfileMenu";
import {Notification} from "./Notification/Notification"
import {Search} from "./Search/Search";
import styles from "./Header.module.css"
import ava from '../../assets/img/jpg/Morty.jpg'

export const Header = () => {
    return (
        <div className={styles.header}>
            <Logo/>
            <Search/>
            <Notification/>
            <ProfileMenu name={'Морцыпан'} img={ava}/>
        </div>
    );
};

