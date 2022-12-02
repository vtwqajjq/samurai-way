import React from 'react';
import style from "./Preloader.module.css";

const Preloader = () => {
    return (
        <div className={style.loaderBody}>
            <div className={style.preloader}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default Preloader;