import React from 'react';
import HeaderNavBar from './HeaderNavBar';
import {connect} from 'react-redux';
import {getAuthUserData, logout} from '../../../redux/auth-reducer';

type HeaderNavBarContainerType = {
	isAuth: boolean
	login: string | null
	logout: () => void
	getAuthUserData: () => void
}

class HeaderNavBarContainer extends React.Component<HeaderNavBarContainerType> {

	componentDidMount() {
		this.props.getAuthUserData()
	}

	render() {
		return <HeaderNavBar {...this.props} />
	}
}

const mapStateToProps = (state: any) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
})

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderNavBarContainer);
