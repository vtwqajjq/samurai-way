import React from 'react';
import style from "./CountModule.module.css"

type CountModulePropsType = {
    followers : number
    name?: string
    photos?: number
}

export const CountModule = (props: CountModulePropsType) => {
    return (
        <div className={style.countModule}>
            <div className={style.count}>{props.followers}</div>
            <div className={style.description}>{props.name}</div>
        </div>
    );
};

