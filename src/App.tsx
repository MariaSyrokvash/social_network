import React from 'react';
import app from './App.module.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


const App: React.FC = () => {

	return (
			<div className={app.app}>
				<Header/>
				<div className={app.container}>
					<NavBar />
					<div className={app.content}>
						<Route render={() => <DialogsContainer />} path='/dialogs'/>
						<Route render={() => <ProfileContainer /> }  path='/profile/:userID?'/>
						<Route render={() => <UsersContainer /> }  path='/users'/>
						<Route render={() => <News/>} path='/news'/>
						<Route render={() => <Music/>} path='/music'/>
						<Route render={() => <Settings/>} path='/settings'/>
					</div>
				</div>
			</div>
	);
}


export default App;
