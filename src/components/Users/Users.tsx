import React from 'react';
import {userType} from '../../redux/users-reducer';
import us from './Users.module.css';


type UsersPropsType = {
	users: Array<userType>
	follow: (userID: string) => void
	unFollow: (userID: string) => void
	setUsers: (users: Array<userType>) => void
}

export const Users = (props: UsersPropsType) => {
	const users = props.users;
	console.log(props)


	return (
		<div className={us.box_wrap}>
			<div className={us.titleBox}>
				<h2 className={us.title}>Friend Lists</h2>
				<img src='https://iqonic.design/themes/socialv/html/images/page-img/profile-bg7.jpg' className={us.box_bg}/>
			</div>
			<div className={us.box}>
				{users.map(user => {

					const unFollowing = () =>  props.unFollow(user.id);
					const following = () => props.follow(user.id);

					return (
						<div key={user.id} className={us.container}>
							<img src={user.profileBgImg} className={us.bg}/>
							<div className={us.wrapper}>
								<img src={user.image} className={us.avatar}/>
								<div className={us.inner}>
									<p className={us.name}>{user.fullName}</p>
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

