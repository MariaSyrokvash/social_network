import {v1} from 'uuid';
import {ActionsType, MessagePageType} from './store';

const ADD_NEW_MESSAGE_BODY = `ADD_NEW_MESSAGE_BODY`;
const SEND_MESSAGE = ' SEND_MESSAGE';

export const AddNewMessageBodyActionCreator = (value: string) => {
	return {
		type: ADD_NEW_MESSAGE_BODY,
		newMessageBody: value
	} as const
}
export const SendMessageBodyActionCreator = () => {
	return {
		type: SEND_MESSAGE
	} as const
}

let initialState: MessagePageType = {
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
}


export const dialogsPageReducer = (state: MessagePageType = initialState, action: ActionsType): MessagePageType => {

	switch (action.type) {
		case ADD_NEW_MESSAGE_BODY:
			return {
				...state,
				newMessageBody: action.newMessageBody
			}
		case SEND_MESSAGE: {
			const body = state.newMessageBody;
			return {
				...state,
				newMessageBody: '',
				messagesData: [...state.messagesData, {id: v1(), message: body}]
			}
		}
		default:
			return state
	}
}