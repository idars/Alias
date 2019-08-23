import React from 'react';
import styled, { withTheme } from 'styled-components'

import Emoji from 'components/emojis/Emoji';

const Meter = styled.meter`
	height: 4px;
	margin: 4px 0px;
	width: 48px;
`;

const Div = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	margin: 8px;

	${Meter} {
		/* Gauge color (Chromium) */
		&::-webkit-meter-optimum-value {
			background: ${props => props.gaugeColor || "whitesmoke"};
		}

		/* Gauge color (Firefox) */
		&::-moz-meter-bar {
			background: ${props => props.gaugeColor || "whitesmoke"};
		}

		/* Bar color (Chromium) */
		&::-webkit-meter-bar {
			background: none;
			background-color: ${props => props.barColor || "grey"};
		}

		/* Bar color (Firefox) */
		background: ${props => props.barColor || "grey"};
	}
`;

class EmojiScore extends React.Component {
	render() {
		return (
			<Div className={this.props.className} {...this.props}>
				<Emoji>{this.props.emoji}</Emoji>
				<Meter min="0" max="100" value={this.props.value} />
				<span>{this.props.value} %</span>
			</Div>
		);
	}
}

export default withTheme(EmojiScore);
