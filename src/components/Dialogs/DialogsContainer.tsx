import React from 'react';
import {StoreType} from '../../redux/store';
import {AddNewMessageBodyActionCreator, SendMessageBodyActionCreator} from '../../redux/dialogspage-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

// type DialogsPropsType = {
// 	// store: StoreType
// }


const DialogsContainer = () => {
	return <StoreContext.Consumer>
		{ (store: any ) => {
			const state = store.getState().dialogsPage;

			const onSendMessageHandler = () => {
				store.dispatch(SendMessageBodyActionCreator())
			}

			const onChangeHandler = (body: string) => {
				if (body) {
					store.dispatch(AddNewMessageBodyActionCreator(body))
				}
			}

			return <Dialogs dialogsPage={state} addNewMessageBody={onChangeHandler} sendMessage={onSendMessageHandler}/>
		}
	}
	</StoreContext.Consumer>
}


export default DialogsContainer;
