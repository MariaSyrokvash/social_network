import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';
// import store from './redux/redux-store';
import App from "./App";
import store from './redux/redux-store';


const rerenderApp = () => {
	ReactDOM.render(
		<App store={store} />,
		document.getElementById('root')
	);
}

rerenderApp();
store.subscribe(rerenderApp)

serviceWorker.unregister();
