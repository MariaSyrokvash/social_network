import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import {store} from './redux/redux-store';
import {Provider} from './StoreContext';
import {BrowserRouter} from 'react-router-dom';


const rerenderApp = () => {
	ReactDOM.render(
		<BrowserRouter>
			<Provider store={store}>
				<App/>
			</Provider>
		</BrowserRouter>
		, document.getElementById('root')
	);
}

rerenderApp();
store.subscribe(rerenderApp)

serviceWorker.unregister();
