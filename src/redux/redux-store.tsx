import {combineReducers, createStore} from 'redux';
import {profilePageReducer} from './profilepage-reducer';
import {dialogsPageReducer} from './dialogspage-reducer';
import {navBarPageReducer} from './navBarPage-reducer';

const reducers = combineReducers({
	profilePage: profilePageReducer,
	dialogsPage: dialogsPageReducer,
	navBarPage: navBarPageReducer
})

const store: any = createStore(reducers);


export default store;