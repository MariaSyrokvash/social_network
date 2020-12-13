import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {getUserProfile} from '../../redux/profilepage-reducer';
import {withAuthRedirect} from '../../hoc/AuthRedirect';

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
			userID = 12438
		}

		this.props.getUserProfile(userID)
	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile}/>
		)
	}

}

const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state: any ) => ({
	profile: state.profilePage.profile,
})

const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);