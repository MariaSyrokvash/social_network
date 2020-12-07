import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {setUserProfile} from '../../redux/profilepage-reducer';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {profileAPI} from '../../api/api';

type PathParamsType = {
  userID: string
}

type CommonComponentPropsType = RouteComponentProps<PathParamsType> & PropsType


type mapStateToPropsType = {
  profile: any
}

type mapDispatchToPropsType = {
  setUserProfile: (profile: any) => void
}


type PropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<any, CommonComponentPropsType> {

	componentDidMount() {
		let userID = this.props.match.params.userID

		if (!userID) {
			userID = 2
		}

		profileAPI.getUserProfile(userID)
			.then(data => {
				this.props.setUserProfile(data);
			})
	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile}/>
		)
	}

}

const mapStateToProps = (state: any ) => ({
	profile: state.profilePage.profile
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);