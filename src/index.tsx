import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {subscribe} from './redux/state';
// import {rerenderApp} from "./render";

// import {addNewPost, stateTypeProps, trackTextarea} from './redux/state';
import {addNewPost, trackTextarea} from './redux/state';
import ReactDOM from "react-dom";
import App from "./App";

// const rerenderApp = (state: stateTypeProps) => {
// 	ReactDOM.render(
// 		<App state={state} addNewPost={addNewPost} trackTextarea={trackTextarea}/>,
// 		document.getElementById('root')
// 	);
// }

const rerenderApp = () => {
	ReactDOM.render(
		<App state={state} addNewPost={addNewPost} trackTextarea={trackTextarea}/>,
		document.getElementById('root')
	);
}
rerenderApp();
subscribe(rerenderApp)

serviceWorker.unregister();
