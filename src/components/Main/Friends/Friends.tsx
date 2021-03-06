import React from 'react';
import style from './Friends.module.css'
import {Friend} from "./Friend/Friend";
import {v1} from "uuid";
import {NavLink, Route} from "react-router-dom";
import {News} from "../News/News";

const friendsData = [
    {
        id: v1(),
        name: 'Артём Богданов',
        avatar: 'https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/9liBNdAgGbURea0peiEX1vU2mMreebnLQ0_AE3eZah-SiYCzYxFPYbM44brLZ7E_mgPOyE3gerbTjUp4OTml905T.jpg?size=200x200&quality=96&crop=1,271,1616,1616&ava=1',
        isOnline: true
    },
    {
        id: v1(),
        name: 'Сергей Чирик',
        avatar: 'https://sun9-85.userapi.com/impf/eH663FhQBe59DwG3pmXf8QlyPHe3nBe8u_FeMQ/oGSTXgBVuR0.jpg?size=480x640&quality=96&sign=6a3fa959d6890c0057a09c04f2d6384b&type=album',
        isOnline: false
    },
    {
        id: v1(),
        name: 'Владислав Кожановский',
        avatar: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/joeEGBFPzIP62tYdAcxwPC2JNUwZfFTBoeEjZC8fXAdN6zAX95rLHuEoe5WYYuicoCVV8s9uA3SeJ4PCbZFsQOQ8.jpg?size=200x200&quality=96&crop=124,378,558,558&ava=1',
        isOnline: false
    },
    {
        id: v1(),
        name: 'Дмитрий Чернышёв',
        avatar: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/TiJxuwfm2-qU-WKtL8vsigbqqG4foZen1AMhcSmihVJ57DWwgBIcOlpelOC1biXuFSLT6A.jpg?size=200x279&quality=96&crop=0,5,1163,1624&ava=1',
        isOnline: true
    },
    {
        id: v1(),
        name: 'Илья Кошкар',
        avatar: 'https://sun9-36.userapi.com/c4120/u54902459/a_cfa9c11f.jpg',
        isOnline: false
    },
    {
        id: v1(),
        name: 'Юра Максимов',
        avatar: 'https://sun9-58.userapi.com/c5780/u139529585/a_87394db2.jpg',
        isOnline: true
    },
    {
        id: v1(),
        name: 'Валентин Кобец',
        avatar: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/wm3yUKRbvLZyTM71lhFz42IQNCW65_6PjsFtAhQzgCLRCLzLiSlk2phqcJj2BPxy5Px0PgfFKi0s5nkJVVPEjsWc.jpg?size=200x266&quality=96&crop=0,0,1620,2160&ava=1',
        isOnline: true
    },
]

export type friendsDataPropsType = {
    id: string,
    name: string,
    avatar: string,
    isOnline: boolean
}

export const Friends = (props: any) => {
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <NavLink className={(isActive) => isActive ? style.active : ""} to='/friends/all'>Все друзья</NavLink><span>124</span>
                <NavLink className={(isActive) => isActive ? style.active : ""} to='/friends/online'>Друзья онлайн</NavLink><span>7</span>
            </div>
            <div className={style.friends}>
                <Route path='/friends/all' render={() => <Friend/>}/>
                <Route path='/friends/online' render={() => <Friend/>}/>
            </div>
        </div>
    );
};
