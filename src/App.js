import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Light, Spacious } from 'services/Themes.js';

import Navbar from 'components/Navbar.js';
import Home from 'pages/Home.js';
import Procedures from 'pages/Procedures.js';
import Profile from 'pages/Profile.js';
import Summary from 'pages/Summary.js';
import Timeline from 'pages/Timeline.js';

/**
 * The base app that will be rendered in the root element.
 */
function App() {
	return (
		<ThemeProvider theme={{...Light, ...Spacious}}>
			<Router>
				<Navbar appName="Alias" />

				<Route path="/" exact component={Home} />
				<Route path="/timeline" component={Timeline} />
				<Route path="/procedures" component={Procedures} />
				<Route path="/summary" component={Summary} />
				<Route path="/profile" component={Profile} />
			</Router>
		</ThemeProvider>
	);
}

export default App;
