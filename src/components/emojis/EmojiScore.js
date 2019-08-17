import React from 'react';
import Twemoji from 'react-twemoji';
import styled, { withTheme } from 'styled-components'
// import './EmojiScore.css';

const StyledTwemoji = styled(Twemoji)`
	img {
		width: 24px;
	}
`;

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
		/* Gauge color (Chrome) */
		&::-webkit-meter-optimum-value {
			background: ${props => props.gaugeColor || "whitesmoke"};
		}

		/* Gauge color (Firefox) */
		&::-moz-meter-bar {
			background: ${props => props.gaugeColor || "whitesmoke"};
		}

		/* Bar color (Firefox) */
		background: ${props => props.barColor || "grey"};

		/* Bar color (Chrome) */
		&::-webkit-meter-bar {
			background: none;
			background-color: ${props => props.barColor || "grey"};
		}
	}
`;

class EmojiScore extends React.Component {
	render() {
		return (
			<Div className={this.props.className} {...this.props}>
				<StyledTwemoji>{this.props.emoji}</StyledTwemoji>
				<Meter min="0" max="100" value={this.props.value} />
				<span>{this.props.value} %</span>
			</Div>
		);
	}
}

export default withTheme(EmojiScore);
