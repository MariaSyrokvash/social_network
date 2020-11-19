import React, {Component} from 'react';
import us from './Users.module.css';
import axios from 'axios';
import defaultImg from './../../assets/image/usersPage/default_user.png';
import {UsersPropsType} from './Users';


class UsersClass extends Component<UsersPropsType, {}> {

	componentDidMount(): void {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			})
	}

	onPageChanged = (page: number) => {
		this.props.setCurrentPage(page);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
			})
	}

	render() {

		const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

		const pages = [];

		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i)
		}

		return (
			<div className={us.box_wrap}>
				<div className={us.pagination_wrap}>
					{pages.map((page, ind) => {
						return <span onClick={() => {
							this.onPageChanged(page)
						}} key={ind} className={this.props.currentPage === page ? us.selected : us.page}>{page}</span>
					})}
				</div>

				<div className={us.titleBox}>
					<h2 className={us.title}>Friend Lists</h2>
					<img src='https://iqonic.design/themes/socialv/html/images/page-img/profile-bg7.jpg' className={us.box_bg}/>
				</div>
				<div className={us.box}>
					{

						this.props.users.map(user => {

							const unFollowing = () => this.props.unFollow(user.id);
							const following = () => this.props.follow(user.id);

							return (
								<div key={user.id} className={us.container}>
									<img src='https://iqonic.design/themes/socialv/html/images/page-img/profile-bg8.jpg'
											 className={us.bg}/>
									<div className={us.wrapper}>
										<img src={user.photos.small === null ? defaultImg : user.photos.small} className={us.avatar}/>
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
}

export default UsersClass;