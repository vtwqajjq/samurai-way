import React from 'react';
import loading from "../../../assets/img/svg/loading.gif";
import style from "./Preloader.module.css";

const Preloader = () => {
    return (
        <div className={style.loader}>
            <img src={loading} alt="loading" />
        </div>
    );
};

export default Preloader;