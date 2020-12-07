import React from 'react';
import us from './Users.module.css';
import defaultImg from '../../assets/image/usersPage/default_user.png';
import {userType} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';
import {userAPI} from '../../api/api';


type UsersFuncPropsType = {
	users: Array<userType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
	follow: (userID: number) => void
	unFollow: (userID: number) => void
	onPageChanged: (page: number) => void
}


const Users = (props: UsersFuncPropsType) => {

	const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

	const pages = [];

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}


	return (
		<div className={us.box_wrap}>
			<div className={us.pagination_wrap}>
				{pages.map((page, ind) => {
					return <span onClick={() => {
						props.onPageChanged(page)
					}} key={ind} className={props.currentPage === page ? us.selected : us.page}>{page}</span>
				})}
			</div>
			<div className={us.titleBox}>
				<h2 className={us.title}>Friend Lists</h2>
				<img src='https://iqonic.design/themes/socialv/html/images/page-img/profile-bg7.jpg' className={us.box_bg}/>
			</div>
			<div className={us.box}>
				{props.users.map(user => {

					const unFollowing = () => {
						userAPI.unFollowing(user.id)
							.then(data => {
								if (data.resultCode === 0) {
									props.unFollow(user.id)
								}
							})

					}
					const following = () => {
						userAPI.following(user.id)
							.then(data => {
								if (data.resultCode === 0) {
									props.follow(user.id);
								}
							})
					}

					return (
						<div key={user.id} className={us.container}>
							<img src='https://iqonic.design/themes/socialv/html/images/page-img/profile-bg8.jpg'
									 className={us.bg}/>
							<div className={us.wrapper}>
								<NavLink to={'/profile/' + user.id}>
									<img src={user.photos.small === null ? defaultImg : user.photos.small} className={us.avatar}/>
								</NavLink>

								<div className={us.inner}>
									<p className={us.name}>@{user.name}</p>
									<p>{user.status}</p>
									{
										user.followed ?
											<button onClick={unFollowing} className={us.follow_btn}>Unfollow</button> :
											<button onClick={following} className={us.follow_btn}>Follow</button>
									}
								</div>
							</div>
						</div>
					)
				})
				}
			</div>
			<button className={us.show_more_btn}>Show more</button>
		</div>
	)
}

export default Users;