import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import PageNotFound from 'pages/PageNotFound';
import Procedure from 'pages/Procedure';
import Profile from 'pages/Profile';
import Search from 'pages/Search';
import Summary from 'pages/Summary';
import Timeline from 'pages/Timeline';

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		font-family: 
			"Segoe UI", "Lato", "Roboto", "Oxygen", 
			"Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", 
			"Helvetica Neue", sans-serif;
		background: ${props => props.theme.color.background};
		color: ${props => props.theme.color.textDark}
	}

	code {
		font-family: "Consolas", "Courier New", monospace;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	a:hover {
		color: #0066ff;
	}

	svg {
		height: ${props => props.theme.icon.medium};
		width: ${props => props.theme.icon.medium};
		stroke-width: ${props => props.theme.thickness.medium};

		:hover {
			cursor: pointer
		}
	}
`;

/**
 * The base app that will be rendered in the root element.
 */
function App() {
	return (
		<div>
			<GlobalStyle />
			<Navbar appName="Alias" />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/timeline" component={Timeline} />
				<Route path="/search" component={Search} />
				<Route path="/summary" component={Summary} />
				<Route path="/profile" component={Profile} />
				<Route path="/procedure/:id" component={Procedure} />
				<Route component={PageNotFound} />
			</Switch>
		</div>
	);
}

export default App;
