import {v1} from 'uuid';

let initialState = {
	navBarData: [
		{id: v1(), friend: 'Boris'},
		{id: v1(), friend: 'Denis'},
		{id: v1(), friend: 'Iosif'},
		{id: v1(), friend: 'Jack'},
		{id: v1(), friend: 'Larisa'}
	]
}
export const navBarPageReducer = (state: any = initialState, action:any) => {

	return state
}