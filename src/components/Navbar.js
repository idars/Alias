import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled, { withTheme } from 'styled-components'

const Bar = styled.div`
	align-items: baseline;
	background: #fdfeff;
	color: #303030;
	display: flex;
	justify-content: space-between;
	padding: 16px 12px;

	.active, .title {
		font-size: ${props => props.theme.textMedium}
	}

	@media(max-width: ${props => props.theme.screenMedium}) {
		justify-content: space-between;
	}
`;

const StyledLink = styled(Link)`
	margin: 0px 12px;

	@media(max-width: ${props => props.theme.screenMedium}) {
		visibility: hidden;
	}
`;

const StyledNavLink = styled(NavLink)`
	margin: 0px 12px;
`;

class Navbar extends React.Component {
	render() {
		return (
			<Bar className={this.props.className}>
				<div className="title">
					<StyledLink to="/">{this.props.appName}</StyledLink>
				</div>
				<nav>
					<StyledNavLink to="/timeline">Tidslinje</StyledNavLink>
					<StyledNavLink to="/procedures">Prosedyrer</StyledNavLink>
					<StyledNavLink to="/summary">Sammendrag</StyledNavLink>
				</nav>
				<div>
					<StyledLink to="/profile">Profil</StyledLink>
				</div>
			</Bar>
		);
	}
}

export default withTheme(Navbar);
