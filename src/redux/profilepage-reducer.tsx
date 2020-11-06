import {v1} from 'uuid';
import {MyPostsType} from './store';

export const addNewPostActionCreator = () => {
	return {
		type: 'addNewPost'
	} as const
}
export const onPostChangeActionCreator = (value: string) => {
	return {
		type: 'trackTextarea',
		newText: value
	} as const
}

let initialState = {
		postsData: [
			{
				id: v1(),
				message: 'Do you know who killed Kennedy?',
				likeCount: 3,
				image: 'https://iqonic.design/themes/socialv/html/images/user/05.jpg'
			},
			{
				id: v1(),
				message: 'Do you have plans to weekend?',
				likeCount: 10,
				image: 'https://iqonic.design/themes/socialv/html/images/user/06.jpg'
			},
		],
		newPostContent: ''
	}

export const profilePageReducer = (state: any = initialState, action: any) => {

	switch (action.type) {
		case 'addNewPost':
			const newPost: MyPostsType = {
				id: v1(),
				message: state.newPostContent,
				likeCount: 0,
				image: 'https://iqonic.design/themes/socialv/html/images/user/01.jpg'
			}
			state.postsData.push(newPost);
			state.newPostContent = '';
			return state
		case 'trackTextarea':
			state.newPostContent = action.newText;
			return state
		default:
			return state
	}
	// if(action.type === 'addNewPost') {
	// 	const newPost: MyPostsType = {
	// 		id: v1(),
	// 		message: state.newPostContent,
	// 		likeCount: 0,
	// 		image: 'https://iqonic.design/themes/socialv/html/images/user/01.jpg'
	// 	}
	// 	state.postsData.push(newPost);
	// 	state.newPostContent = '';
	//
	//
	// } else if (action.type === 'trackTextarea') {
	// 	state.newPostContent = action.newText;
	//
	// }
}