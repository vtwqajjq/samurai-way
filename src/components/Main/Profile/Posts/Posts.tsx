import React, {ChangeEvent} from 'react';
import style from './Posts.module.css'
import Post from "./Post/Post";
import {ProfilePagePropsType} from "./PostsContainer";


export const Posts = (props: ProfilePagePropsType) => {
    let onClickButtonHandler = () => {
        if (newPostElement.current) {
            let element = newPostElement.current?.value.trim()
            props.addPost(element)
            newPostElement.current.value = ''
        }
    }
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const onChangeAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewText(e.currentTarget.value)
    }

    return (
        <div className={style.posts}>
            <div className={style.postsAdder}>
                <textarea onChange={onChangeAreaHandler} ref={newPostElement}></textarea>
                <button onClick={onClickButtonHandler}>Добавить пост</button>
            </div>
            <Post posts={props.profilePage.posts}/>
        </div>
    );
};

