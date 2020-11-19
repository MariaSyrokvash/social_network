import React from 'react';
import app from './App.module.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';


const App: React.FC = () => {

	return (
			<div className={app.app}>
				<Header/>
				<div className={app.container}>
					<NavBar />
					<div className={app.content}>
						<Route render={() => <DialogsContainer />} path='/dialogs'/>
						<Route render={() => <Profile /> }  path='/profile'/>
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
