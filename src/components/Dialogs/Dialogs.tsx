import React, {ChangeEvent} from 'react';
import dialogs from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './MessageItem/MessageItem';
import {
	ActionsType,
	DialogsDataType,
	MessagesDataType,
} from '../../redux/state';
import {AddNewMessageBodyActionCreator, SendMessageBodyActionCreator} from '../../redux/dialogspage-reducer';

type DialogsPropsType = {
	dialogsData: Array<DialogsDataType>
	messagesData: Array<MessagesDataType>
	newMessageBody: string
	dispatch: (action: ActionsType) => void
}

const Dialogs = (props: DialogsPropsType) => {

	const dialogsElements = props.dialogsData.map(dialog => {
		return <DialogItem id={dialog.id} name={dialog.name} key={dialog.id} image={dialog.image}/>;
	})

	const messagesElements = props.messagesData.map(message => {
		return <Message message={message.message} key={message.id}/>
	})

	const NewMessageBody = props.newMessageBody

	const onSendMessageHandler = () => {
		props.dispatch(SendMessageBodyActionCreator())
	}

	const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
		const value = event.target.value;

		if (value) {
			props.dispatch(AddNewMessageBodyActionCreator(value))
		}
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
