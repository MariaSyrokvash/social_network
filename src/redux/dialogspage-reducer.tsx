import {v1} from 'uuid';

const ADD_NEW_MESSAGE_BODY = `ADD_NEW_MESSAGE_BODY`;
const SEND_MESSAGE = ' SEND_MESSAGE';

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


export const dialogsPageReducer = (state: any, action: any) => {

	switch (action.type) {
		case ADD_NEW_MESSAGE_BODY:
			state.newMessageBody = action.newMessageBody;
			return state
		case SEND_MESSAGE:
			const body = state.newMessageBody;
			state.newMessageBody = '';
			state.messagesData.push({id: v1(), message: body});
			return state
		default:
			return state
	}
	// if (action.type ===  ADD_NEW_MESSAGE_BODY) {
	//  state.newMessageBody = action.newMessageBody;
	//
	// } else if (action.type === SEND_MESSAGE) {
	// 	const body = state.newMessageBody;
	//  state.newMessageBody = '';
	//  state.messagesData.push({ id: v1(), message: body});
	// }
	// return state
}