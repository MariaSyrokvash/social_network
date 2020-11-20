import {v1} from 'uuid';
import { MyPostsType, ProfilePageType} from './store';

const ADD_NEW_POST = 'addNewPost'
const TRACK_TEXTAREA = 'trackTextarea'
const SET_USER_PROFILE = 'setUserProfile'

type AddNewPostActionType = ReturnType<typeof addNewPostActionCreator>
type TrackTextareaActionType = ReturnType<typeof onPostChangeActionCreator>
type setUserProfileActionType = ReturnType<typeof setUserProfile>

type ActionType =
	AddNewPostActionType
	| TrackTextareaActionType
	| setUserProfileActionType

export const addNewPostActionCreator = () => {
	return {
		type: ADD_NEW_POST
	} as const
}
export const onPostChangeActionCreator = (value: string) => {
	return {
		type: TRACK_TEXTAREA,
		newText: value
	} as const
}

export const setUserProfile = (profile: any) => {
	return {
		type: SET_USER_PROFILE,
		profile: profile
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
	newPostContent: '',
	profile: null
}

export const profilePageReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
	switch (action.type) {
		case ADD_NEW_POST:
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

		case TRACK_TEXTAREA: {
			return {
				...state,
				newPostContent: action.newText
			}
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile
			}
		}
		default:
			return state
	}
}