import {v1} from 'uuid';
import {ActionsType, MyPostsType, ProfilePageType} from './store';

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

let initialState: ProfilePageType = {
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

export const profilePageReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
	switch (action.type) {
		case 'addNewPost':
			const newPost: MyPostsType = {
				id: v1(),
				message: state.newPostContent,
				likeCount: 0,
				image: 'https://iqonic.design/themes/socialv/html/images/user/01.jpg'
			}
			return {
				...state,
				postsData: [...state.postsData, newPost],
				newPostContent: ''
			}

		case 'trackTextarea': {
			return {
				...state,
				newPostContent: action.newText
			}
		}
		default:
			return state
	}
}