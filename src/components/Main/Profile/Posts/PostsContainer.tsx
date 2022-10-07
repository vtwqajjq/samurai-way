import React, {ChangeEvent} from 'react';
import style from './Posts.module.css'
import {addPostActionCreator, changeNewTextActionCreator} from "../../../../redux/profile-reducer";
import {PostType} from "../../Main";
import {ActionTypes} from "../../../../App";
import {Posts} from "./Posts";

type PostsPropsType = {
    postsData: PostType[]
    dispatch: (action: ActionTypes) => void
}

const PostsContainer = (props: PostsPropsType) => {
    let onClickButtonHandler = (element: string) => {
            props.dispatch(addPostActionCreator(element))

    }

    const onChangeAreaHandler = (text: string) => {
        props.dispatch(changeNewTextActionCreator(text))
    }

    return <Posts addPost={onClickButtonHandler} changeNewText={onChangeAreaHandler} postsData={props.postsData}/>
};

export default PostsContainer;