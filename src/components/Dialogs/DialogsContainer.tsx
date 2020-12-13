import React from 'react';
import {AddNewMessageBodyActionCreator, SendMessageBodyActionCreator} from '../../redux/dialogspage-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import { withAuthRedirect} from '../../hoc/AuthRedirect';


const mapStateToProps = (state: AppStateType) => {
	return {
		dialogsPage: state.dialogsPage,
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

const AuthRedirectComponent = withAuthRedirect(Dialogs);


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)


export default DialogsContainer;
