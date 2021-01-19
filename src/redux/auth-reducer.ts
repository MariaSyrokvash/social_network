import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';
import {Dispatch} from 'redux';

const SET_USER_DATA = 'AUTH/SET_USER_DATA'

const initialState = {
	userID: null,
	login: null,
	email: null,
	isFetching: false,
	isAuth: false
}

export type InitialUsersStateType = {
	userID: null | number
	login: null | string
	email: null | string
	isFetching: boolean
	isAuth: boolean
}

// export type InitialUsersStateType = typeof initialState;


export const authReducer = (state: InitialUsersStateType = initialState, action: ActionType): InitialUsersStateType => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload,
			}
		default:
			return state
	}
}

type setUserDataACType = ReturnType<typeof setAuthUserDataAC>

type ActionType =
	setUserDataACType

export const setAuthUserDataAC = (userID: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
	type: SET_USER_DATA,
	payload: {
		userID, email, login, isAuth
	}
} as const)


// export const getAuthUserData = () => (dispatch: Dispatch)=> {
// 	return authAPI.getAuthMe()
// 		.then(data => {
// 			if (data.resultCode === 0) {
// 				const {id, email, login} = data.data;
// 				console.log(data.data)
// 				dispatch(setAuthUserDataAC(id, email, login, true));
// 			}
// 		})
// }
export const getAuthUserData = () => async (dispatch: Dispatch) => {
	const data = await authAPI.getAuthMe()
	if (data.resultCode === 0) {
		const {id, email, login} = data.data;
		console.log(data.data)
		dispatch(setAuthUserDataAC(id, email, login, true));
	}
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
	const data = await authAPI.login(email, password, rememberMe)
	if (data.resultCode === 0) {
		dispatch(getAuthUserData())
	} else {
		const message = data.messages.length > 0 ? data.messages[0] : 'Some error'
		const action = stopSubmit('login', {_error: message});
		dispatch(action)
	}
}

export const logout = () => async (dispatch: Dispatch) => {
	const data = await authAPI.logout()
	if (data.resultCode === 0) {
		dispatch(setAuthUserDataAC(null, null, null, false));
	}
}