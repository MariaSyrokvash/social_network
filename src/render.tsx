import {addNewPost, stateTypeProps} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

export const rerenderApp = (state: stateTypeProps) => {
	ReactDOM.render(
		<App state={state} addNewPost={addNewPost}/>,
		document.getElementById('root')
	);
}