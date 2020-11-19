import {ActionsType} from './store';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

const initialState: initialUsersStateType = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1
}
export type initialUsersStateType = {
	users: Array<userType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
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
export const currentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}) as const
export const totalUsersCountAC = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount}) as const

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
				users: [...action.users]
			}
		}
		case SET_CURRENT_PAGE: {
			return { ...state, currentPage: action.currentPage}
		}
		case SET_TOTAL_USERS_COUNT: {
			return { ...state, totalUsersCount: action.count}
		}
		default:
			return state
	}
}