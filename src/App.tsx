import React from 'react';
import app from './App.module.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import store, {StoreType} from './redux/store';
import DialogsContainer from './components/Dialogs/DialogsContainer';


type AppTypeProps = {
	// store: StoreType
}


const App: React.FC<AppTypeProps> = (props) => {

	const state = props.store.getState();

	return (
		<BrowserRouter>
			<div className={app.app}>
				<Header/>
				<div className={app.container}>
					<NavBar navBarData={state.navBarPage.navBarData}/>
					<div className={app.content}>
						<Route render={() => <DialogsContainer store={props.store} />} path='/dialogs'/>
						<Route render={() => <Profile store={props.store}/> }  path='/profile'/>
						<Route render={() => <News/>} path='/news'/>
						<Route render={() => <Music/>} path='/music'/>
						<Route render={() => <Settings/>} path='/settings'/>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}


export default App;
