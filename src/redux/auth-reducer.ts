const SET_USER_DATA = 'SET_USER_DATA'

type setUserDataACType = ReturnType<typeof setAuthUserDataAC>

type ActionType =
	setUserDataACType


const initialState: initialUsersStateType = {
	userId: null,
	login: null,
	email: null,
	isFetching: false,
	isAuth: false
}
export type initialUsersStateType = {
	userId: null | number
	login: null | string
	email: null | string
	isFetching: boolean
	isAuth: boolean
}


export const setAuthUserDataAC = (userID: number, email: string, login: string) => ({type: SET_USER_DATA, data: {userID, email, login} } as const)


export const authReducer = (state: initialUsersStateType = initialState, action: ActionType): initialUsersStateType => {

	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.data,
				isAuth: true
			}

		default:
			return state
	}
}