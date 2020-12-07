import React from 'react';
import HeaderNavBar from './HeaderNavBar';
import {connect} from 'react-redux';
import {setAuthUserDataAC} from '../../../redux/auth-reducer';
import {authAPI} from '../../../api/api';

class HeaderNavBarContainer extends React.Component<any, any> {

	componentDidMount() {
		authAPI.getAuthMe()
			.then(data => {
				if (data.resultCode === 0) {
					const {id, email, login} = data.data;
					this.props.setAuthUserDataAC(id, email, login);
				}
			})
	}

	render() {
		return <HeaderNavBar {...this.props}/>
	}
}

const mapStateToProps = (state: any) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
})

export default connect(mapStateToProps, {setAuthUserDataAC})(HeaderNavBarContainer);
