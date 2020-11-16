import {ActionsType} from './store';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const initialState: initialUsersStateType = {
	users: []
}
export type initialUsersStateType = {
	users: Array<userType>
}
export type PhotoType = {
	small: string | null
	large: string | null
}
export type userType = {
	name: string
	id: number
	uniqueUrlName: null
	photos: PhotoType
	status: null
	followed: false
}

export const setUsersAC = (users: Array<userType>) => ({type: SET_USERS, users}) as const
export const followAC = (userID: number) => ({type: FOLLOW, userID}) as const
export const unFollowAC = (userID: number) => ({type: UNFOLLOW, userID}) as const

export const usersReducer = (state: initialUsersStateType = initialState, action: ActionsType): initialUsersStateType => {

	switch (action.type) {
		case FOLLOW:
			return <initialUsersStateType>{
				...state,
				users: state.users.map((user) => {
					if (user.id === action.userID) {
						return {...user, followed: true}
					}
					return user
				})
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map((user) => {
					if (user.id === action.userID) {
						return {...user, followed: false}
					}
					return user
				})
			}
		case SET_USERS: {
			return {
				...state,
				users: [...state.users, ...action.users]
			}
		}
		default:
			return state
	}
}