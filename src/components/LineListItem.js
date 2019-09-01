import React from 'react';
import { Link } from 'react-router-dom';
import styled, { withTheme } from 'styled-components';

import Emoji from 'components/emojis/Emoji';
import EmojiRow from 'components/emojis/EmojiRow';
import EmojiScore from 'components/emojis/EmojiScore';
import EmojiScoreRow from 'components/emojis/EmojiScoreRow';

const itemWidth = '600px';

const Overlay = styled.div`
	align-items: center;
    background: #56CCF2;
    color: #ffffff;
	display: flex;
	height: 28px;
	justify-content: space-between;
	max-width: ${itemWidth};
    padding: 8px;
`;

const Underlay = styled.div`
	align-items: center;
    background: #303030;
    color: #ffffff;
    display: ${props => props.active ? 'flex' : 'none'};
	justify-content: space-between;
	max-width: ${itemWidth};
	padding: 8px;
`;

const tos = [
	{
		date: null,
		values: []
	}
];

class LineListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dropdown: false
		};
		this.toggleDropdown = this.toggleDropdown.bind(this);
	}

	static defaultProps = {
		id: null,
		name: 'Element uten navn',
		scheduledAt: null,
		userRatings: [{
			date: null,
			values: [0, 0, 0, 0, 0]
		}]
	};

	hasBeenRatedSinceScheduledTime() {
		let dateScheduled = new Date(this.props.scheduledAt);
		let dateRated = new Date(this.props.userRatings[0].date);
		return dateScheduled < dateRated;
	}

	toggleDropdown(e) {
		this.setState(state => ({
			dropdown: !state.dropdown
		}));
	}

	shouldDisplayRating() {
		let dateScheduled = new Date(this.props.scheduledAt);

		// Display if the scheduled time has already passed
		return dateScheduled < Date.now();
	}

	render() {
		return (
			<div className={this.props.className}>
				<Overlay>
					<Link to={"/procedure/" + this.props.id}>
						{this.props.name}
					</Link>
					{
						this.shouldDisplayRating() && (
							this.hasBeenRatedSinceScheduledTime()
								? <EmojiRow onClick={this.toggleDropdown} rating={this.props.userRatings[0].values} />
								: <EmojiRow onClick={this.toggleDropdown} />
						)
					}
				</Overlay>
				<Underlay active={this.state.dropdown}>
					<EmojiScoreRow rating={this.props.userRatings[0].values} />
					<Link to="/">Vis historikk</Link>
				</Underlay>
			</div>
		);
	}
}

export default withTheme(LineListItem);
