import React from 'react';
import {PostType} from "../../../../../redux/state";
import style from './Post.module.css'

type PostPropsType = {
    posts: PostType[]
}

const Post = (props: PostPropsType) => {
    return (
        <div>
            {props.posts.map((el) => {
                return (
                    <div className={style.post}>
                        <p>{el.text}</p>
                        <div className={style.date}>
                            <p>{el.time}</p>
                            <p>{el.date}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Post;