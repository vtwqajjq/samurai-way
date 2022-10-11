import React from 'react';
import style from "./Profile.module.css"
import {CountModule} from "./CountModule/CountModule";
import {ProfilePageType} from "../Main";
import {ActionTypes} from "../../../App";
import PostsContainer from "./Posts/PostsContainer";
import {StoreContext} from "../../../StoreContext";

/*type ProfilePropsType = {
    profileData: ProfilePageType
    dispatch: (action: ActionTypes) => void
}*/

export const Profile = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState()
                return (
                    <div className={style.profile}>
                        <div className={style.avatar}>
                            <img src={state.profilePageData.profile.img} alt="Avatar"/>
                            <button>Добавить в друзья</button>
                        </div>
                        <div className={style.info}>
                            <h1>{state.profilePageData.profile.name}</h1>
                            <div className={style.personInfo}>
                                <p>День рождения:<span>{state.profilePageData.profile.birthday}</span></p>
                                <p>Город:<span>{state.profilePageData.profile.city}</span></p>
                            </div>
                            <CountModule followers={state.profilePageData.profile.followers}
                                         name={'подписчик(-а)'}/>
                            <PostsContainer postsData={state.profilePageData.posts} dispatch={store.dispatch}
                            />
                            {/*<CountModule photos={props.photos} name={'фотографии'}/>*/}
                        </div>
                    </div>
                )
            }


            }
        </StoreContext.Consumer>

    );
};
