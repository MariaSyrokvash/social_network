import {v1} from 'uuid';
import {profilePageReducer} from './profilepage-reducer';
import {dialogsPageReducer} from './dialogspage-reducer';
import {navBarPageReducer} from './navBarPage-reducer';

const ADD_NEW_MESSAGE_BODY = `ADD_NEW_MESSAGE_BODY`;
const SEND_MESSAGE = ' SEND_MESSAGE';

export type MyPostsType = {
	id: string
	message: string
	likeCount: number
	image: string
}
export type ProfilePageType = {
	postsData: Array<MyPostsType>
	newPostContent: string
}
export type DialogsDataType = {
	id: string
	name: string
	image: string
}
export type MessagesDataType = {
	id: string
	message: string
}
export type MessagePageType = {
	messagesData: Array<MessagesDataType>
	dialogsData: Array<DialogsDataType>
	newMessageBody: string
}
export type NavBarDataType = {
	id: string
	friend: string
}
export type NavbarPageType = {
	navBarData: Array<NavBarDataType>
}
export type stateTypeProps = {
	profilePage: ProfilePageType
	dialogsPage: MessagePageType
	navBarPage: NavbarPageType
}
export type StoreType = {
	_state: stateTypeProps
	getState: () => stateTypeProps
	subscribe: (callback: () => void) => void
	renderHandler: () => void
	dispatch : (action: ActionsType) => void
}

type AddNewPostActionType = ReturnType<typeof addNewPostActionCreator>
type TrackTextareaActionType = ReturnType<typeof onPostChangeActionCreator>
type AddNewMessageBodyActionType = ReturnType<typeof AddNewMessageBodyActionCreator>
type SendMessageBodyActionType = ReturnType<typeof SendMessageBodyActionCreator>

export type ActionsType = AddNewPostActionType | TrackTextareaActionType | AddNewMessageBodyActionType | SendMessageBodyActionType

export const addNewPostActionCreator = () => {
	return {
		type: 'addNewPost'
	} as const
}
export const onPostChangeActionCreator = (value: string) => {
	return {
		type: 'trackTextarea',
		newText: value
	} as const
}
export const AddNewMessageBodyActionCreator = (value: string) => {
	return {
		type: ADD_NEW_MESSAGE_BODY,
		newMessageBody: value
	}	as const
}
export const SendMessageBodyActionCreator = () => {
	return {
		type: SEND_MESSAGE
	}	as const
}



const store: StoreType = {
	_state: {
		profilePage: {
			postsData: [
				{
					id: v1(),
					message: 'Do you know who killed Kennedy?',
					likeCount: 3,
					image: 'https://iqonic.design/themes/socialv/html/images/user/05.jpg'
				},
				{
					id: v1(),
					message: 'Do you have plans to weekend?',
					likeCount: 10,
					image: 'https://iqonic.design/themes/socialv/html/images/user/06.jpg'
				},
			],
			newPostContent: ''
		},
		dialogsPage: {
			dialogsData: [
				{id: v1(), name: 'Boris', image: 'https://iqonic.design/themes/socialv/html/images/user/05.jpg'},
				{id: v1(), name: 'Denis', image: 'https://iqonic.design/themes/socialv/html/images/user/07.jpg'},
				{id: v1(), name: 'Iosif', image: 'https://iqonic.design/themes/socialv/html/images/user/09.jpg'},
				{id: v1(), name: 'Yekaterina', image: 'https://iqonic.design/themes/socialv/html/images/user/08.jpg'},
				{id: v1(), name: 'Larisa', image: 'https://iqonic.design/themes/socialv/html/images/user/06.jpg'},
			],
			messagesData: [
				{id: v1(), message: 'Go outside!'},
				{id: v1(), message: 'What are you doing?'},
				{id: v1(), message: 'There is the house where my family lives.'},
				{id: v1(), message: 'We go jogging every Sunday!'},
				{id: v1(), message: 'They didn’t go to school last year.'},
			],
			newMessageBody: ''
		},
		navBarPage: {
			navBarData: [
				{id: v1(), friend: 'Boris'},
				{id: v1(), friend: 'Denis'},
				{id: v1(), friend: 'Iosif'},
				{id: v1(), friend: 'Jack'},
				{id: v1(), friend: 'Larisa'}
			]
		}
	},
	getState() {
		return this._state
	},
	subscribe(observer: () => void) {
		this.renderHandler = observer;
	},
	renderHandler() {console.log('state changed')},


	dispatch(action: ActionsType) {

		this._state.profilePage = profilePageReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action)
		this._state.navBarPage = navBarPageReducer(this._state.navBarPage, action)

		this.renderHandler()

		// if(action.type === 'addNewPost') {
		// 	const newPost: MyPostsType = {
		// 		id: v1(),
		// 		message: this._state.profilePage.newPostContent,
		// 		likeCount: 0,
		// 		image: 'https://iqonic.design/themes/socialv/html/images/user/01.jpg'
		// 	}
		// 	this._state.profilePage.postsData.push(newPost);
		// 	this._state.profilePage.newPostContent = '';
		// 	this.renderHandler()
		//
		// } else if (action.type === 'trackTextarea') {
		// 	this._state.profilePage.newPostContent = action.newText;
		// 	this.renderHandler()
		// } else if (action.type ===  ADD_NEW_MESSAGE_BODY) {
		// 	this._state.dialogsPage.newMessageBody = action.newMessageBody;
		// 	this.renderHandler()
		// } else if (action.type === SEND_MESSAGE) {
		// 	const body = this._state.dialogsPage.newMessageBody;
		// 	this._state.dialogsPage.newMessageBody = '';
		// 	this._state.dialogsPage.messagesData.push({ id: v1(), message: body});
		// 	this.renderHandler()
		// }
	}
}

export default store;


