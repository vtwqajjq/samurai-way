import React, {ChangeEvent} from 'react';
import style from './Posts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../../redux/state";

type PostsPropsType = {
    postsData: PostType[]
    addPostCallback: (postMessage: string) => void
    changeNewTextCallback: (newText: string) => void
}

const Posts = (props: PostsPropsType) => {
    let onClickButtonHandler = () => {
        if (newPostElement.current) {
            props.addPostCallback(newPostElement.current?.value.trim())
            newPostElement.current.value = ''
        }
    }
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const onChangeAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewTextCallback(e.currentTarget.value)
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

export default Posts;