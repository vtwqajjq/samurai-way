import React from 'react';
import {NavBar} from "./NavBar/NavBar";
import {Profile} from "./Profile/Profile";
import style from "./Main.module.css"
import {Dialogs} from "./Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./News/News";
import {Photos} from "./Photos/Photos";
import {Friends} from "./Friends/Friends";
import {Groups} from "./Groups/Groups";
import {Music} from "./Music/Music";


export const Main = () => {
    return (
        <BrowserRouter>
            <div className={style.main}>
                <NavBar/>
                <Route path='/profile' render={() => <Profile
                    img={'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/joeEGBFPzIP62tYdAcxwPC2JNUwZfFTBoeEjZC8fXAdN6zAX95rLHuEoe5WYYuicoCVV8s9uA3SeJ4PCbZFsQOQ8.jpg?size=200x200&quality=96&crop=124,378,558,558&ava=1'}
                    name={'Владислав Кожановский'}
                    birthday={'9 февраля'}
                    city={'Речица'}
                    followers={143}
                    photos={22}
                />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/dialogs' render={() => <Dialogs/>}/>
                <Route path='/friends' render={() => <Friends/>}/>
                <Route path='/groups' render={() => <Groups/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/photos' render={() => <Photos/>}/>
            </div>
        </BrowserRouter>
    );
};

