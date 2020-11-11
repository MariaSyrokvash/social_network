import {v1} from 'uuid';
import {ActionsType} from './store';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState: initialUsersStateType = {
	users: [
		{
			id: v1(),
			image: 'https://iqonic.design/themes/socialv/html/images/user/15.jpg',
			profileBgImg: 'https://iqonic.design/themes/socialv/html/images/page-img/profile-bg6.jpg',
			followed: true,
			fullName: 'Kate',
			status: '@programmer',
			location: {city: 'Minsk', country: 'Belarus'}
		},
		{
			id: v1(),
			image: 'https://iqonic.design/themes/socialv/html/images/user/14.jpg',
			profileBgImg: 'https://iqonic.design/themes/socialv/html/images/page-img/profile-bg2.jpg',
			followed: false,
			fullName: 'Liza',
			status: '@actress',
			location: {city: 'Jakarta', country: 'Indonesia'}
		},
		{
			id: v1(),
			image: 'https://iqonic.design/themes/socialv/html/images/user/18.jpg',
			profileBgImg: 'https://iqonic.design/themes/socialv/html/images/page-img/profile-bg3.jpg',
			followed: false,
			fullName: 'Bill',
			status: '@undertaker',
			location: {city: 'Brussels', country: 'Belgium'}
		},
		{
			id: v1(),
			image: 'https://iqonic.design/themes/socialv/html/images/user/13.jpg',
			profileBgImg: 'https://iqonic.design/themes/socialv/html/images/page-img/profile-bg4.jpg',
			followed: true,
			fullName: 'Ben',
			status: '@hairdresser',
			location: {city: 'Ottawa', country: 'Canada'}
		}
	]
}

type locationType = {
	city: string
	country: string
}

export type userType = {
	id: string
	image: string
	profileBgImg: string
	followed: boolean
	fullName: string
	status: string
	location: locationType
}

export type initialUsersStateType = {
	users: Array<userType>
}

export const followAC = (userID: string) => ({type: FOLLOW, userID}) as const
export const unFollowAC = (userID: string) => ({type: UNFOLLOW, userID}) as const
export const setUsersAC = (users: Array<userType>) => ({type: SET_USERS, users}) as const


export const usersReducer = (state: initialUsersStateType = initialState, action: ActionsType) : initialUsersStateType  => {

	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map((user: userType) => {
					if (user.id === action.userID) {
						return {...user, followed: true}
					}
					return user
				})
			}
		case UNFOLLOW:
			debugger
			return {
				...state,
				users: state.users.map((user: userType) => {
					if (user.id === action.userID) {
						return {...user, followed: false}
					}
					return user
				})

			}
		case SET_USERS:
			return {
				...state,
				users: [...state.users, ...action.users]
			}
		default:
			return state
	}
}