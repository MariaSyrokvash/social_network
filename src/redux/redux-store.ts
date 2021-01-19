import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {profilePageReducer} from './profilepage-reducer';
import {dialogsPageReducer} from './dialogspage-reducer';
import {navBarPageReducer} from './navBarPage-reducer';
import {usersReducer} from './users-reducer';
import {authReducer} from './auth-reducer';
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import {appReducer} from './app-reducer';


const reducers = combineReducers({
	profilePage: profilePageReducer,
	dialogsPage: dialogsPageReducer,
	navBarPage: navBarPageReducer,
	usersPage: usersReducer,
	auth: authReducer,
	app: appReducer,
	form: formReducer
});

// export type AppStateType = ReturnType<typeof reducers>
export type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>

// export const store = createStore(reducers, applyMiddleware(thunkMiddleware))
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

