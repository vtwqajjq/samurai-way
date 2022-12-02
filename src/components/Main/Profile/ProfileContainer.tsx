import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";
import {ProfilePageType} from "../Main";
import {setUserProfile} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {userId=22}
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <>
                <Profile profileData={this.props.profilePage}/>
            </>
        )
    }
}

type MapStateToPropsType = {
    profilePage: ProfilePageType
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        profilePage: state.profileReducer
    }
}

let ProfileContainerWithUrl = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(ProfileContainerWithUrl);