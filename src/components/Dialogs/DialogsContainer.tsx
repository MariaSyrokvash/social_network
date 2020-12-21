import React from 'react';
import { SendMessageBodyActionCreator} from '../../redux/dialogspage-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {withAuthRedirect} from '../../hoc/AuthRedirect';
import {compose} from 'redux';


const mapStateToProps = (state: AppStateType) => {
	return {
		dialogsPage: state.dialogsPage,
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		sendMessage: (newMessageBody: string) => {
			dispatch(SendMessageBodyActionCreator(newMessageBody))
		}
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs)


// const AuthRedirectComponent = withAuthRedirect(Dialogs);
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
//
// export default DialogsContainer;
