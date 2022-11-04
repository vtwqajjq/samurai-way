import {connect} from "react-redux";
import {
    changeCurrentPage,
    changePageSize,
    follow,
    FriendsPageType,
    setUsers,
    setUsersCount,
    toggleIsFetching,
    unfollow,
    UserType
} from "../../../redux/friends-reducer";
import {RootStateType} from "../../../redux/redux-store";
import React from "react";
import axios from "axios";
import {Friends} from "./Friends";

class FriendsContainerApi extends React.Component<any, FriendsContainerPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setUsersCount(response.data.totalCount)
            })
    }

    changePageNumber = (pageNumber: number) => {
        this.props.changeCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    changePageSize = (pageSize: string | null) => {
        pageSize && this.props.changePageSize(+pageSize)
        this.props.toggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=${pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Friends friendsPage={this.props.friendsPage} follow={this.props.follow} unfollow={this.props.unfollow}
                        setUsers={this.props.setUsers} changeCurrentPage={this.props.changeCurrentPage}
                        setUsersCount={this.props.setUsersCount} changePageSize={this.changePageSize}
                        changePageNumber={this.changePageNumber}
        />
    }
}

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
    toggleIsFetching: (isFetching: boolean) => void
}

export type FriendsContainerPropsType = MapStateToPropsType & MapDispatchToPropsType


let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        friendsPage: state.friendsReducer
    }
}
/*
let mapDispatchToProps = (dispatch: Dispatch<any>): MapDispatchToPropsType => {
    return
}*/

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    changeCurrentPage,
    setUsersCount,
    changePageSize,
    toggleIsFetching
})(FriendsContainerApi)