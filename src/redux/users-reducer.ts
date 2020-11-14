import {v1} from 'uuid';
import {ActionsType} from './store';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState: initialUsersStateType = {
	users: []
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


export const usersReducer = (state: initialUsersStateType = initialState, action: ActionsType): initialUsersStateType => {

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