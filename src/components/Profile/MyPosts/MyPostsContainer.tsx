import React from 'react';
import {addNewPostActionCreator, onPostChangeActionCreator} from '../../../redux/profilepage-reducer';
import MyPosts from './MyPosts';
import {StoreType} from '../../../redux/store';

type MyPostsContainerPropsType = {
	store: StoreType
}


const MyPostsContainer = (props: MyPostsContainerPropsType) => {

	const state = props.store.getState();
	console.log(state)

	const addNewPost = () => {
		props.store.dispatch(addNewPostActionCreator())
	}

	const onPostChange = (value: string) => {
		if (value) {
			props.store.dispatch(onPostChangeActionCreator(value))
		}
	}

	return (
		<MyPosts trackTextarea={onPostChange} addNewPost={addNewPost} postsData={state.profilePage.postsData}
						 newPostContent={state.profilePage.newPostContent}/>
	)
}

export default MyPostsContainer;