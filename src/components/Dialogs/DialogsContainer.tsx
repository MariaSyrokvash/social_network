import React from 'react';
import {AddNewMessageBodyActionCreator, SendMessageBodyActionCreator} from '../../redux/dialogspage-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';


const mapStateToProps = (state: AppStateType) => {
	return {
		dialogsPage: state.dialogsPage
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		addNewMessageBody: (body: string) => {
			dispatch(AddNewMessageBodyActionCreator(body))
		},
		sendMessage: () => {
			dispatch(SendMessageBodyActionCreator())
		}
	}
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;
