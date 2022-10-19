import React, {Dispatch} from 'react';
import {addPostActionCreator, changeNewTextActionCreator} from "../../../../redux/profile-reducer";
import {Posts} from "./Posts";
import {connect} from "react-redux";
import {ProfilePageType} from "../../Main";
import {RootStateType} from "../../../../redux/redux-store";


/*const PostsContainer = (props: PostsPropsType) => {
    let onClickButtonHandler = (element: string) => {
        props.dispatch(addPostActionCreator(element))

    }

    const onChangeAreaHandler = (text: string) => {
        props.dispatch(changeNewTextActionCreator(text))
    }

    return <Posts addPost={onClickButtonHandler} changeNewText={onChangeAreaHandler} postsData={props.postsData}/>
};*/

type MapStateToPropsType = {
    profilePage: ProfilePageType
}

type MapDispatchToPropsType = {
    addPost: (element: string) => void
    changeNewText: (text: string) => void
}

export type ProfilePagePropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: RootStateType) => {
    return {
        profilePage: state.profileReducer
    }
}



let mapDispatchToProps = (dispatch: Dispatch<any>): MapDispatchToPropsType => {
    return {
        addPost: (element: string)=> {
            dispatch(addPostActionCreator(element))
        },
        changeNewText: (text: string) => {
            dispatch(changeNewTextActionCreator(text))
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;