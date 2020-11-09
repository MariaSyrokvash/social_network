import React from 'react';
import {addNewPostActionCreator, onPostChangeActionCreator} from '../../../redux/profilepage-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';
import {StoreType} from '../../../redux/store';

// type MyPostsContainerPropsType = {
// 	// store: StoreType
// }


const MyPostsContainer = () => {
	return <StoreContext.Consumer>
		{ (store: any) => {
			const state = store.getState();

			const addNewPost = () => {
				store.dispatch(addNewPostActionCreator())
			}

			const onPostChange = (value: string) => {
				if (value) {
					store.dispatch(onPostChangeActionCreator(value))
				}
			}

			return <MyPosts trackTextarea={onPostChange}
											addNewPost={addNewPost}
											postsData={state.profilePage.postsData}
											newPostContent={state.profilePage.newPostContent}
			/>

		}
		}
	</StoreContext.Consumer>
}

export default MyPostsContainer;