import React from 'react';
import Friends from './Friends';
import {connect} from 'react-redux';
import {NavbarPageType} from '../../../redux/store';

type MapStateToProps = {
	navBarData: NavbarPageType
}
type mapDispatchToProps = {

}



const mapStateToProps = (state: any) => {
	return {
		navBarData: state.navBarPage.navBarData
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {}
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
export default FriendsContainer;
