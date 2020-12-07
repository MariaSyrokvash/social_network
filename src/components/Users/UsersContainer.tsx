import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
	follow, setCurrentPage, setToggle, setTotalUsersCount,
	setUsers,
	unFollow,
	userType
} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import Users from './Users';
import Loader from '../common/Loader/Loader';
import {userAPI} from '../../api/api';

export type UsersPropsType = {
	users: Array<userType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
	follow: (userID: number) => void
	unFollow: (userID: number) => void
	setUsers: (users: Array<userType>) => void
	setCurrentPage: (page: number) => void
	setTotalUsersCount: (totalUsers: number) => void
	inProgress: boolean
	setToggle: (loader: boolean) => void
}


class UsersContainer extends Component<UsersPropsType, {}> {

	componentDidMount(): void {
		this.props.setToggle(true)

		userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
				this.props.setToggle(false)
				this.props.setUsers(data.items);
				this.props.setTotalUsersCount(data.totalCount);
			})
	}

	onPageChanged = (page: number) => {
		this.props.setCurrentPage(page);
		this.props.setToggle(true)

		userAPI.getUsers(page, this.props.pageSize)
			.then(data => {
				this.props.setToggle(false)
				this.props.setUsers(data.items);
			})
	}

	render() {
		return <>
			{this.props.inProgress ? <Loader/> : null}
			<Users
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				users={this.props.users}
				follow={this.props.follow}
				unFollow={this.props.unFollow}
			/>
		</>
	}
}

const mapStateToProps = (state: AppStateType) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		inProgress: state.usersPage.inProgress
	}
}

// const mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
// 	return {
// 		follow: (userID: number) => {
// 			dispatch(followAC(userID))
// 		},
// 		unFollow: (userID: number) => {
// 			dispatch(unFollowAC(userID))
// 		},
// 		setUsers: (users: any) => {
// 			dispatch(setUsersAC(users))
// 		},
// 		setCurrentPage: (currentPage: number) => {
// 			dispatch(currentPageAC(currentPage))
// 		},
// 		setTotalUsersCount: (totalCount: number) => {
// 			dispatch(totalUsersCountAC(totalCount))
// 		},
// 		setToggle: (loader: boolean) => {
// 			dispatch(toggleLoaderAC(loader))
// 		}
// 	}
// }

export default connect(mapStateToProps, {
		follow,
		unFollow,
		setUsers,
		setCurrentPage,
		setTotalUsersCount,
		setToggle
	}
)(UsersContainer)