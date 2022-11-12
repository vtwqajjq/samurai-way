import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";
import {ProfilePageType} from "../Main";
import {setUserProfile} from "../../../redux/profile-reducer";

class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);