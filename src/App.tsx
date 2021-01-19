import React from 'react';
import app from './App.module.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import {Route, withRouter} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializeAppTC} from './redux/app-reducer';
import {AppStateType} from './redux/redux-store';
import Loader from './components/common/Loader/Loader';


class App extends React.Component<any, any> {

	componentDidMount() {
		this.props.initializeAppTC()
	}

	render() {
		if(!this.props.initialized) {
			return <Loader />
		}
		return (
			<div className={app.app}>
				<Header/>
				<div className={app.container}>
					<NavBar/>
					<div className={app.content}>
						<Route render={() => <DialogsContainer/>} path='/dialogs'/>
						<Route render={() => <ProfileContainer/>} path='/profile/:userID?'/>
						<Route render={() => <UsersContainer/>} path='/users'/>
						<Route render={() => <News/>} path='/news'/>
						<Route render={() => <Music/>} path='/music'/>
						<Route render={() => <Settings/>} path='/settings'/>
						<Route render={() => <Login/>} path='/login'/>
					</div>
				</div>
			</div>
		);
	}
}


const mapStateToProps = (state: AppStateType) => ({
	initialized: state.app.initialized
})


export default compose(
	withRouter,
	connect(mapStateToProps, {initializeAppTC}))(App) as React.FunctionComponent<any>
