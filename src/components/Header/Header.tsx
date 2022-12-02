import React from 'react';
import {Logo} from "./Logo/Logo";
import {ProfileMenu} from "./ProfileMenu/ProfileMenu";
import {Notification} from "./Notification/Notification"
import {Search} from "./Search/Search";
import styles from "./Header.module.css"
import ava from '../../assets/img/jpg/Morty.jpg'
import {authResponseType} from "../../redux/auth-reducer";
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    userData: authResponseType
}

export const Header = (props: HeaderPropsType) => {
    return (
        !props.userData.isAuth
            ? <NavLink to={'/login'}>Login</NavLink>
            : <div className={styles.header}>
                <Logo/>
                <Search/>
                <Notification/>
                <ProfileMenu name={props.userData.login!} img={ava}/>
            </div>
    );
};

