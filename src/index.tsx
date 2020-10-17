import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state from "./redux/state";
import {rerenderApp} from "./render";


rerenderApp(state)

serviceWorker.unregister();
