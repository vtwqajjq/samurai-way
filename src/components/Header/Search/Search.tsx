import React from 'react';
import Magnifier from "../../../assets/img/svg/Magnifier.svg"
import style from "./Search.module.css"


export const Search = () => {
    return (
        <div className={style.searchWrapper}>
            <input placeholder='Поиск'/>
        </div>
    );
};

