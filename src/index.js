import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import * as serviceWorker from './serviceWorker';
import Content from "./components/content";

import {Root} from "./components/content";
import {Tablas} from "./components/tablas";
import { render } from '@testing-library/react';

ReactDOM.render(
	<div>
		<Content/>
	</div>,
	document.getElementById("root")
);

serviceWorker.unregister();

class App extends React.Component{
	render(){
		return(
			<Router history ={browserHistory}>
				<Route path={"/"} component={Root}>
					<IndexRoute component={Tablas}/>
					<Route path={"tablas"} component={Tablas}/>
				</Route>
			</Router>
		)
	}
}
render(<App/>, window.document.getElementById('app'));