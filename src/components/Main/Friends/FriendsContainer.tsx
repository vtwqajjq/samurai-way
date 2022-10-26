import {connect} from "react-redux";
import {Friends} from "./Friends";
import {
    changeCurrentPageAC, changePageSizeAC,
    followAC,
    FriendsPageType,
    setUsersAC, setUsersCountAC,
    unfollowAC,
    UserType
} from "../../../redux/friends-reducer";
import {RootStateType} from "../../../redux/redux-store";
import {Dispatch} from "react";

type MapStateToPropsType = {
    friendsPage: FriendsPageType
}

type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
    changeCurrentPage: (pageNumber: number) => void
    setUsersCount: (userCount: number) => void
    changePageSize: (pageSize: number) => void
}

export type FriendsPropsType = MapStateToPropsType & MapDispatchToPropsType


let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        friendsPage: state.friendsReducer
    }
}

let mapDispatchToProps = (dispatch: Dispatch<any>): MapDispatchToPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        changeCurrentPage: (pageNumber) => {
            dispatch(changeCurrentPageAC(pageNumber))
        },
        setUsersCount: (usersCount: number) => {
            dispatch(setUsersCountAC(usersCount))
        },
        changePageSize: (pageSize: number) => {
            dispatch(changePageSizeAC(pageSize))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Friends)