import React from 'react';
import {authResponseType, setAuthData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Header} from "./Header";
import {RootStateType} from "../../redux/redux-store";
import axios from "axios";

class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthData(response.data.data)
                }
            })
    }

    render() {
        return (
            <Header userData={this.props.userData}/>
        );
    }
}

type MapStateToPropsType = {
    userData: authResponseType
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        userData: state.authReducer
    }
}

export default connect(mapStateToProps, {setAuthData})(HeaderContainer)
