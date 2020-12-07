import React from 'react';
import HeaderNavBar from './HeaderNavBar';
import {connect} from 'react-redux';
import {getAuthUserData} from '../../../redux/auth-reducer';

class HeaderNavBarContainer extends React.Component<any, any> {

	componentDidMount() {
		this.props.getAuthUserData()
	}

	render() {
		return <HeaderNavBar {...this.props}/>
	}
}

const mapStateToProps = (state: any) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
})

export default connect(mapStateToProps, {getAuthUserData})(HeaderNavBarContainer);
