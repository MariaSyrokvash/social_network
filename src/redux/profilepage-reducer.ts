import {v1} from 'uuid';
import {authAPI, profileAPI} from '../api/api';
import {Dispatch} from 'redux';

const ADD_NEW_POST = 'PROFILE/ADD_NEW_POST'
const SET_USER_PROFILE = 'PROFILE/SET_USER_PROFILE'
const SET_STATUS = 'PROFILE/SET_STATUS'
const DELETE_POST = 'PROFILE/DELETE_POST'


export type MyPostsType = {
	id: string
	message: string
	likeCount: number
	image: string
}
export type ProfilePageType = {
	postsData: Array<MyPostsType>
	newPostContent?: string | undefined
	profile: null
	status: string
}

const initialState: ProfilePageType = {
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
	profile: null,
	status: ''
}


export const profilePageReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
	switch (action.type) {
		case ADD_NEW_POST:
			const newPost: MyPostsType = {
				id: v1(),
				message: action.newPostContent,
				likeCount: 0,
				image: 'https://iqonic.design/themes/socialv/html/images/user/01.jpg'
			}
			return {
				...state,
				postsData: [...state.postsData, newPost],
				newPostContent: ''
			}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile
			}
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status
			}
		}
		case DELETE_POST: {
			return {
				...state,
				postsData: state.postsData.filter(post => post.id !== action.postId)
			}
		}
		default:
			return state
	}
}

//ACTIONS TYPE
type AddNewPostActionType = ReturnType<typeof addNewPostActionCreator>
type setUserProfileActionType = ReturnType<typeof setUserProfile>
type setStatusActionType = ReturnType<typeof setStatus>
type deletePostActionType = ReturnType<typeof deletePostAC>

type ActionType =
	AddNewPostActionType
	| setUserProfileActionType
	| setStatusActionType
	| deletePostActionType


//ACTIONS
export const addNewPostActionCreator = (newPostContent: string) => {
	return {
		type: ADD_NEW_POST,
		newPostContent
	} as const
}

export const deletePostAC = (postId: string) => {
	return {
		type: DELETE_POST,
		postId
	} as const
}

export const setUserProfile = (profile: any) => {
	return {
		type: SET_USER_PROFILE,
		profile: profile
	} as const
}

export const setStatus = (status: string) => {
	return {
		type: SET_STATUS,
		status: status
	} as const
}

//THUNKS
export const getUserProfile = (userID: number) => async (dispatch: Dispatch) => {
	const data = await profileAPI.getUserProfile(userID)
	dispatch(setUserProfile(data));
}

export const getStatus = (userID: number) => async (dispatch: any) => {
	const response = await profileAPI.getStatus(userID)
	dispatch(setStatus(response.data));
}

export const updateStatus = (status: string) => async (dispatch: any) => {
	const response = await profileAPI.updateStatus(status)
	if (response.data.resultCode === 0) {
		dispatch(setStatus(status));
	} else {
		console.log('resultCode < 0')
	}
}