import {v1} from 'uuid';
import {MyPostsType} from './state';

export const profilePageReducer = (state: any, action: any) => {

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