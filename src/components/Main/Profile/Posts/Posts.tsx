import React from 'react';
import style from './Posts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../../redux/state";

type PostsPropsType = {
    postsData: PostType[]
    addPostCallback: (postMessage: string) => void
}

const Posts = (props: PostsPropsType) => {
    let onClickButtonHandler = () => {
        debugger
        if (newPostElement.current) {
            props.addPostCallback(newPostElement.current?.value)
        }
    }
    let newPostElement = React.createRef<HTMLTextAreaElement>()


    return (
        <div className={style.posts}>
            <div className={style.postsAdder}>
                <textarea ref={newPostElement}></textarea>
                <button onClick={onClickButtonHandler}>Добавить пост</button>
            </div>
        <Post posts = {props.postsData}/>
        </div>
    );
};

export default Posts;