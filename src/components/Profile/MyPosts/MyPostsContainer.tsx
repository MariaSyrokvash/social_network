import React from 'react';
import {addNewPostActionCreator} from '../../../redux/profilepage-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';


const mapStateToProps = (state: AppStateType) => {
	return {
		postsData: state.profilePage.postsData,
		newPostContent: state.profilePage.newPostContent
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		addNewPost: () => {
			dispatch(addNewPostActionCreator())
		}
	}
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;