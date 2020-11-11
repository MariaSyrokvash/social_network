import {combineReducers, createStore} from 'redux';
import {profilePageReducer} from './profilepage-reducer';
import {dialogsPageReducer} from './dialogspage-reducer';
import {navBarPageReducer} from './navBarPage-reducer';
import {usersReducer} from './users-reducer';

export type AppStateType = ReturnType<typeof reducers>

const reducers: any = combineReducers({
	profilePage: profilePageReducer,
	dialogsPage: dialogsPageReducer,
	navBarPage: navBarPageReducer,
	usersPage: usersReducer
});


export const store: any = createStore(reducers)