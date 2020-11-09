import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import {store} from './redux/redux-store';
import StoreContext from './StoreContext';


const rerenderApp = () => {
	ReactDOM.render(
		<StoreContext.Provider value={store}>
			<App/>
		</StoreContext.Provider>
		,
		document.getElementById('root')
	);
}

rerenderApp();
store.subscribe(rerenderApp)

serviceWorker.unregister();
