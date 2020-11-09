import {combineReducers, createStore} from 'redux';
import {profilePageReducer} from './profilepage-reducer';
import {dialogsPageReducer} from './dialogspage-reducer';
import {navBarPageReducer} from './navBarPage-reducer';
import {ActionsType, MessagePageType, NavbarPageType, ProfilePageType} from './store';

// type reducersType = {
// 	profilePage: (state: ProfilePageType, action: ActionsType) => state: ProfilePageType
// 	dialogsPage: (state: MessagePageType, action: ActionsType) => state: MessagePageType
// 	navBarPage: (state: NavbarPageType, action: ActionsType) => state: NavbarPageType
// }

const reducers: any = combineReducers({
	profilePage: profilePageReducer,
	dialogsPage: dialogsPageReducer,
	navBarPage: navBarPageReducer
});

export const store: any = createStore(reducers)