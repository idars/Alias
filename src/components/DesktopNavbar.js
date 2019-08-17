import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

class Navbar extends React.Component {
	render() {
		return (
			<div className="navbar">
				<div>
					<NavLink className="title item" to="/">{this.props.appName}</NavLink>
				</div>
				<nav>
					<NavLink className="item" to="/timeline">Tidslinje</NavLink>
					<NavLink className="item" to="/procedures">Prosedyrer</NavLink>
					<NavLink className="item" to="/summary">Sammendrag</NavLink>
					<NavLink className="item" to="/profile">Profil</NavLink>
				</nav>
			</div>
		);
	}
}

export { Navbar as default };
