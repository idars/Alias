import React from 'react';
import Twemoji from 'react-twemoji';
import styled, { withTheme } from 'styled-components'

const StyledTwemoji = styled(Twemoji)`
	opacity: ${props => props.inactive ? '0.5' : '1.0'};
	
	-webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    img {
		filter: ${props => props.inactive ? 'grayscale(100%)' : 'none'};
		width: 24px;
	}
`;

class Emoji extends React.Component {
	render() {
		return (
			<div className={this.props.className} role="img">
				<StyledTwemoji inactive={this.props.inactive ? 1 : 0}>
					{this.props.symbol || '😀'}
				</StyledTwemoji>
			</div>
		);
	}
}

export default withTheme(Emoji);
