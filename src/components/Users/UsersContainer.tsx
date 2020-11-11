import React from 'react';
import {Users} from './Users';
import {connect} from 'react-redux';
import {followAC, setUsersAC, unFollowAC} from '../../redux/users-reducer';
import {Dispatch} from 'redux';
import {ActionsType} from '../../redux/store';
import {AppStateType} from '../../redux/redux-store';

const mapStateToProps = (state: AppStateType) => {
	return {
		users: state.usersPage.users
	}
}

const mapDispatchToProps = (dispatch:(action: ActionsType) => void) => {
	return {
			follow: (userID: string) => {
				dispatch(followAC(userID))
			},
			unFollow: (userID: string) => {
			 	dispatch(unFollowAC(userID))
		},
			setUsers: (users: any) => {
			dispatch(setUsersAC(users))
		}
	}
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)