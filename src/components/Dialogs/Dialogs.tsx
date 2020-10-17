import React from 'react';
import dialogs from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./MessageItem/MessageItem";
import {DialogsDataType, MessagesDataType} from '../../redux/state';

type DialogsPropsType = {
	dialogsData: Array<DialogsDataType>
	messagesData: Array<MessagesDataType>
}

const Dialogs = (props: DialogsPropsType) => {

  const dialogsElements = props.dialogsData.map(dialog => {
    return <DialogItem id={dialog.id} name={dialog.name} key={dialog.id} image={dialog.image}/>;
  })

	const messagesElements = props.messagesData.map(message => {
		return <Message message={message.message} key={message.id}/>
	})

	return (
		<div className={dialogs.dialogs__wrapper}>
			<div className={dialogs.dialogs}>
				<ul className={dialogs.dialog__list}>
					{dialogsElements}
				</ul>
			</div>
			<div className={dialogs.messages}>
				<ul className={dialogs.message__list}>
          {messagesElements}
				</ul>
			</div>
		</div>
	)
}


export default Dialogs;
