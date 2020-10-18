import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import Content from "./components/content";
import Tablas from "./components/tablas";
// import Proyecto from "./components/proyecto";

ReactDOM.render(
	<div>
		{/* <Content/> */}
		<Tablas/>
		{/* <Proyecto/> */}
	</div>,
	document.getElementById("root")
);

serviceWorker.unregister();
