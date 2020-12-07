import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {withRouter, RouteComponentProps, Redirect} from 'react-router-dom';
import {getUserProfile} from '../../redux/profilepage-reducer';

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

		this.props.getUserProfile(userID)
	}

	render() {
		if (!this.props.isAuth) {
			return <Redirect to={'/login'}/>
		}

		return (
			<Profile {...this.props} profile={this.props.profile}/>
		)
	}

}

const mapStateToProps = (state: any ) => ({
	profile: state.profilePage.profile,
	isAuth: state.auth.isAuth
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

// export const getUserProfileThunkCreator = (userID: number) => {
// 	return (dispatch: any) => {
// 		profileAPI.getUserProfile(userID)
// 			.then(data => {
// 				setUserProfile(data);
// 			})
// 	}
// }


export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);