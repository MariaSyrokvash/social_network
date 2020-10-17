import React from 'react';
import navbar from './HeaderNavBar.module.css';

const HeaderNavBar = () => {
	return (
		<div className={navbar.wrap}>
			<div className={navbar.containerAva}>
				<img className={navbar.ava} src='https://iqonic.design/themes/socialv/html/images/user/1.jpg' alt='ava'/>
				<h3 className={navbar.title}>Bni Cyst</h3>
			</div>
		</div>
	)
}

export default HeaderNavBar;
