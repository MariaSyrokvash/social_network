import React from 'react';
import app from './App.module.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {stateTypeProps} from "./redux/state";

type AppTypeProps = {
  state: stateTypeProps
  addNewPost: (message: string) => void
}


const App = (props: AppTypeProps) => {
  console.log(props)
  return (
  	<BrowserRouter>
      <div className={app.app}>
        <Header />
        <div className={app.container}>
          <NavBar navBarData={props.state.navBarPage.navBarData}/>
          <div className={app.content}>
            <Route render={() => <Dialogs dialogsData={props.state.dialogsPage.dialogsData} messagesData={props.state.dialogsPage.messagesData}/>} path='/dialogs'/>
            <Route render={() => <Profile postsData={props.state.profilePage.postsData} addNewPost={props.addNewPost}/>} Profile path='/profile'/>
            <Route render={() => <News />} path='/news'/>
            <Route render={() => <Music />} path='/music'/>
            <Route render={() => <Settings />} path='/settings'/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
