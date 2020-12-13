import {applyMiddleware, combineReducers, createStore} from 'redux';
import {profilePageReducer} from './profilepage-reducer';
import {dialogsPageReducer} from './dialogspage-reducer';
import {navBarPageReducer} from './navBarPage-reducer';
import {usersReducer} from './users-reducer';
import {authReducer} from './auth-reducer';
import thunkMiddleware from "redux-thunk";


const reducers = combineReducers({
	profilePage: profilePageReducer,
	dialogsPage: dialogsPageReducer,
	navBarPage: navBarPageReducer,
	usersPage: usersReducer,
	auth: authReducer
});

// export type AppStateType = ReturnType<typeof reducers>
export type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))