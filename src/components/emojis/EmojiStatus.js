import React from 'react';
import Twemoji from 'react-twemoji';
import styled, { withTheme } from 'styled-components'

const StyledTwemoji = styled(Twemoji)`
    opacity: ${state => (state.active ? '1.0' : '0.5')};

    img {
		width: 24px;
	}
`;

class EmojiStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true
        }
    }

	render() {
		return (
			<div className={this.props.className}>
				<StyledTwemoji>{this.props.children || "😀"}</StyledTwemoji>
			</div>
		);
	}
}

export default withTheme(EmojiStatus);
