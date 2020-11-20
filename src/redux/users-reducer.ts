const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_LOADER = 'TOGGLE_LOADER'

type followACActionType = ReturnType<typeof follow>
type unFollowACActionType = ReturnType<typeof unFollow>
type setUsersACActionType = ReturnType<typeof setUsers>
type currentPageActionType = ReturnType<typeof setCurrentPage>
type totalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
type toggleLoaderActionType = ReturnType<typeof setToggle>


type ActionType =
	followACActionType
	| unFollowACActionType
	| setUsersACActionType
	| currentPageActionType
	| totalUsersCountActionType
	| toggleLoaderActionType

const initialState: initialUsersStateType = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	inProgress: false
}
export type initialUsersStateType = {
	users: Array<userType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
	inProgress: boolean
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
	followed: boolean
}

export const setUsers = (users: Array<userType>) => ({type: SET_USERS, users} as const)
export const follow = (userID: number) => ({type: FOLLOW, userID} as const)
export const unFollow = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
	type: SET_TOTAL_USERS_COUNT,
	count: totalUsersCount
} as const)
export const setToggle = (loader: boolean) => ({type: TOGGLE_LOADER, loader} as const)

export const usersReducer = (state: initialUsersStateType = initialState, action: ActionType): initialUsersStateType => {

	switch (action.type) {
		case FOLLOW:
			return {
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
			return {...state, currentPage: action.currentPage}
		}
		case SET_TOTAL_USERS_COUNT: {
			return {...state, totalUsersCount: action.count}
		}
		case TOGGLE_LOADER: {
			return {...state, inProgress: action.loader}
		}
		default:
			return state
	}
}