import React from 'react';
import logo from 'graphics/logos/logo.svg';
import styled from 'styled-components';

const Header = styled.header`
	text-align: center;

	background-color: #fdfeff;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: black;

	.App-logo {
		animation: App-logo-spin infinite 20s linear;
		height: 40vmin;
		pointer-events: none;
	}

	.App-link {
		color: #61dafb;
	}

	@keyframes App-logo-spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

function Home() {
	return (
		<Header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
				Edit <code>src/App.js</code> and save to reload.
          </p>
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
          </a>
		</Header>
	);
}

export default Home;
