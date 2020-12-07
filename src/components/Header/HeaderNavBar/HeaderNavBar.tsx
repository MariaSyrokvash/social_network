import React from 'react';
import navbar from './HeaderNavBar.module.css';
import { NavLink } from 'react-router-dom';

type HeaderNavBarPropsType = {
	// isAuth: boolean
	// login: string | null
}

const HeaderNavBar = (props: any) => {
	return (
		<div className={navbar.wrap}>
			<div>
				{
					props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>
				}

			</div>
			<div className={navbar.containerAva}>
				<img className={navbar.ava} src='https://iqonic.design/themes/socialv/html/images/user/1.jpg' alt='ava'/>
				<h3 className={navbar.title}>Bni Cyst</h3>
			</div>
		</div>
	)
}

export default HeaderNavBar;
