import React from 'react';
import style from './Friends.module.css';
import {NavBarDataType} from '../../../redux/store';
import Friends from './Friends';
import StoreContext from '../../../StoreContext';

// type FriendsTypeProps = {
//   navBarData: Array<NavBarDataType>
// }

const FriendsContainer = () => {
	return <StoreContext.Consumer>
		{ (store: any) => {
			const state = store.getState().navBarPage.navBarData

			return (
				<Friends navBarData={state}/>
			)
		}}
	</StoreContext.Consumer>
}
export default FriendsContainer;
