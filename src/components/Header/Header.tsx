import React from 'react';
import {Logo} from "./Logo/Logo";
import {ProfileMenu} from "./ProfileMenu/ProfileMenu";
import {Notification} from "./Notification/Notification"
import {Search} from "./Search/Search";
import styles from "./Header.module.css"

export const Header = () => {
    return (
        <div className={styles.header}>
            <Logo/>
            <Search/>
            <Notification/>
            <ProfileMenu name={'Elvis Presley'} img={'https://sun9-77.userapi.com/impf/F_-FjkchTTY4KDex-yPsOu2fo7HTdVO0336DIg/3rMVRwYiqwA.jpg?size=600x600&quality=95&sign=8578a4accfc7bc579dab7cf242264895&type=album'}/>
        </div>
    );
};

