import React from 'react';
import {StoreType} from '../../redux/store';
import {AddNewMessageBodyActionCreator, SendMessageBodyActionCreator} from '../../redux/dialogspage-reducer';
import Dialogs from './Dialogs';

type DialogsPropsType = {
	store: StoreType
}

const DialogsContainer = (props: DialogsPropsType) => {

	const state = props.store.getState().dialogsPage;

	const onSendMessageHandler = () => {
		props.store.dispatch(SendMessageBodyActionCreator())
	}

	const onChangeHandler = (body: string) => {
		if (body) { props.store.dispatch(AddNewMessageBodyActionCreator(body)) }
	}

	return (
		<Dialogs dialogsPage={state} addNewMessageBody={onChangeHandler} sendMessage={onSendMessageHandler}/>
	)
}


export default DialogsContainer;
