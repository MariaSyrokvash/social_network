import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/state';
import App from "./App";


const rerenderApp = () => {
	ReactDOM.render(
		<App store={store} />,
		document.getElementById('root')
	);
}

rerenderApp();
store.subscribe(rerenderApp)

serviceWorker.unregister();
