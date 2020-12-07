import React, {ChangeEvent} from 'react';
import dialogs from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './MessageItem/MessageItem';
import {MessagePageType} from '../../redux/store';
import { Redirect } from 'react-router-dom';

type DialogsPropsType = {
	dialogsPage: MessagePageType
	addNewMessageBody: (message: string) => void
	sendMessage: () => void
	isAuth: boolean
}

const Dialogs = (props: DialogsPropsType) => {

	const state = props.dialogsPage;


	const dialogsElements = state.dialogsData.map(dialog => {
		return <DialogItem id={dialog.id} name={dialog.name} key={dialog.id} image={dialog.image}/>;
	})

	const messagesElements = state.messagesData.map(message => {
		return <Message message={message.message} key={message.id}/>
	})

	const NewMessageBody = state.newMessageBody

	const onSendMessageHandler = () => {
		props.sendMessage();
	}

	const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
		const value = event.target.value;
		if (value) {
			props.addNewMessageBody(value)
		}
	}

	if (!props.isAuth) {
		 return <Redirect to={'/login'}/>
	}

	return (
		<div className={dialogs.dialogs__wrapper}>
			<div className={dialogs.dialogs}>
				<ul className={dialogs.dialog__list}>
					{dialogsElements}
				</ul>
			</div>
			<div className={dialogs.messages}>
				<ul className={dialogs.message__list}>
					<div>{messagesElements}</div>
				</ul>
				<div className={dialogs.box}>
					<div>
						<textarea value={NewMessageBody}
											onChange={onChangeHandler}
											placeholder='Type your message..' className={dialogs.textarea}></textarea>
					</div>
					<div>
						<button className={dialogs.btn} onClick={onSendMessageHandler}>Send</button>
					</div>
				</div>
			</div>
		</div>
	)
}


export default Dialogs;
