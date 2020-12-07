import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
	follow, followThunkCreator, getUsersThunkCreator, setCurrentPage, setToggleFollowingProgress,
	unFollow, unFollowThunkCreator,
	userType
} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import Users from './Users';
import Loader from '../common/Loader/Loader';

export type UsersPropsType = {
	users: Array<userType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
	follow: (userID: number) => void
	unFollow: (userID: number) => void
	setCurrentPage: (page: number) => void
	inProgress: boolean
	followingInProgress: Array<number>
	setToggleFollowingProgress: (following: boolean, userID: number) => void
	getUsersThunkCreator: (currentPage: number, pageSize: number) => void
	followThunkCreator: (userID: number) => void
	unFollowThunkCreator: (userID: number) => void
}


class UsersContainer extends Component<UsersPropsType, {}> {

	componentDidMount(): void {
		this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
	}

	onPageChanged = (page: number) => {
		this.props.getUsersThunkCreator(page, this.props.pageSize)

		// this.props.setCurrentPage(page);
		// this.props.setToggle(true)
		//
		// userAPI.getUsers(page, this.props.pageSize)
		// 	.then(data => {
		// 		this.props.setToggle(false)
		// 		this.props.setUsers(data.items);
		// 	})
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
				followingInProgress={this.props.followingInProgress}
				setToggleFollowingProgress={this.props.setToggleFollowingProgress}
				followThunkCreator={this.props.followThunkCreator}
				unFollowThunkCreator={this.props.unFollowThunkCreator}
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
		inProgress: state.usersPage.inProgress,
		followingInProgress: state.usersPage.followingInProgress
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
	setCurrentPage,
	setToggleFollowingProgress,
	getUsersThunkCreator,
	followThunkCreator,
	unFollowThunkCreator
})(UsersContainer)