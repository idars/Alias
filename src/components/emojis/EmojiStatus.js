import React from 'react';
import Twemoji from 'react-twemoji';
import styled, { withTheme } from 'styled-components'

const StyledTwemoji = styled(Twemoji)`
    opacity: ${props => props.inactive ? '0.5' : '1.0'};

    img {
		filter: ${props => props.inactive ? 'grayscale(100%)' : 'none'};
		width: 24px;
	}
`;

class EmojiStatus extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inactive: !this.props.children
		};
	}

	init() {
		return this.state.inactive ? "😀" : this.props.children;
	}

	render() {
		return (
			<div className={this.props.className}>
				<StyledTwemoji inactive={this.state.inactive}>{this.init()}</StyledTwemoji>
			</div>
		);
	}
}

export default withTheme(EmojiStatus);
