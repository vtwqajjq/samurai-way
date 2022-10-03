import React, {ChangeEvent} from 'react';
import style from './Posts.module.css'
import Post from "./Post/Post";
import {
    ActionTypes,
    PostType
} from "../../../../redux/state";
import {addPostActionCreator, changeNewTextActionCreator} from "../../../../redux/profile-reducer";

type PostsPropsType = {
    postsData: PostType[]
    dispatch: (action: ActionTypes) => void
}

const Posts = (props: PostsPropsType) => {
    let onClickButtonHandler = () => {
        if (newPostElement.current) {
            props.dispatch(addPostActionCreator(newPostElement.current?.value.trim()))
            newPostElement.current.value = ''
        }
    }
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const onChangeAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewTextActionCreator(e.currentTarget.value))
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