import '@sass/content/home/home.scss';

import Home from '@component/Home';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Liste from './components/Liste';


function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
			<Switch>
				<Route exact path="/Liste">
					<Liste />
				</Route>
			</Switch>
		</Router>
	);
}


export default App;
