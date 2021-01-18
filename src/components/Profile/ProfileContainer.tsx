import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {getStatus, getUserProfile, updateStatus} from '../../redux/profilepage-reducer';
import {withAuthRedirect} from '../../hoc/AuthRedirect';
import {AppStateType} from '../../redux/redux-store';
import {compose} from 'redux';

type PathParamsType = {
	userID: string
}

type CommonComponentPropsType = RouteComponentProps<PathParamsType> & PropsType


type mapStateToPropsType = {
	// profile:  null
	// status: string
	// authorizedUserID: string
	// isAuth: boolean
}

type mapDispatchToPropsType = {
  setUserProfile: (profile: any) => void
}


type PropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<any, CommonComponentPropsType> {


	componentDidMount() {
		console.log(this.props.authorizedUserID)

		let userID = this.props.match.params.userID
		// userID = 12438
		if (!userID) {
			userID = this.props.authorizedUserID
			if (!userID) {
				this.props.history.push('/login')
			}
		}

		this.props.getUserProfile(userID);
		this.props.getStatus(userID)
	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile}
							 status={this.props.status} updateStatus={this.props.updateStatus}/>
		)
	}
}

const mapStateToProps = (state: AppStateType ) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	authorizedUserID: state.auth.userID,
	isAuth: state.auth.isAuth,
})


export default compose(
	connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
	withRouter,
	withAuthRedirect
)(ProfileContainer) as React.FunctionComponent<any>

//тоже самое что и запись через константы:
// const AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
// export default connect(mapStateToProps, {getUserProfile,  getStatus, updateStatus})(WithUrlDataContainerComponent);