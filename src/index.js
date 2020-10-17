import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import Content from "./components/content";
import Tablas from "./components/tablas";

ReactDOM.render(
	<div>
		<Tablas/>
	</div>,
	document.getElementById("root")
);

serviceWorker.unregister();
