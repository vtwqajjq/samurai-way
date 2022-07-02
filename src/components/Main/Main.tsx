import React from 'react';
import {NavBar} from "./NavBar/NavBar";
import {Profile} from "./Profile/Profile";
import style from "./Main.module.css"

export const Main = () => {
    return (
        <div className={style.main}>
            <NavBar/>
            <Profile
                img={'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/joeEGBFPzIP62tYdAcxwPC2JNUwZfFTBoeEjZC8fXAdN6zAX95rLHuEoe5WYYuicoCVV8s9uA3SeJ4PCbZFsQOQ8.jpg?size=200x200&quality=96&crop=124,378,558,558&ava=1'}
                name={'Владислав Кожановский'}
                birthday={'9 февраля'}
                city={'Речица'}
                followers={143}
                photos={22}
            />
        </div>
    );
};

