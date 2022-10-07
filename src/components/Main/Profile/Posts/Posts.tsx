import React, {ChangeEvent} from 'react';
import style from './Posts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../Main";

type PostsPropsType = {
    postsData: PostType[]
    addPost: (element: string) => void
    changeNewText: (text: string) => void
}

export const Posts = (props: PostsPropsType) => {
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
            <Post posts={props.postsData}/>
        </div>
    );
};

