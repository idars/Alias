import React from 'react';
import { Link } from 'react-router-dom';
import styled, { withTheme } from 'styled-components';

import EmojiRow from 'components/emojis/EmojiRow';
import EmojiScore from 'components/emojis/EmojiScore';

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

const EmojiScoreRow = styled.div`
	display: flex;
	flex-direction: row;

	> div {
		margin: 8px;
	}
`;

class LineListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dropdown: false
		};

		this.getRating = this.getRating.bind(this);
		this.toggleDropdown = this.toggleDropdown.bind(this);
	}

	getRating() {
		return (this.props.rating !== undefined) ? this.props.rating : 0;
	}

	toggleDropdown(e) {
		this.setState(state => ({
			dropdown: !state.dropdown
		}));
	}

	render() {
		return (
			<div className={this.props.className}>
				<Overlay>
					<Link to={"/procedure/" + this.props.id}>
						{this.props.procedureName}
					</Link>
					<EmojiRow onClick={this.toggleDropdown} rating={this.props.rating} />
				</Overlay>
				<Underlay active={this.state.dropdown}>
					<EmojiScoreRow>
						<EmojiScore symbol="😀" value={this.getRating()[0]} gaugeColor={this.props.theme.emoji.happy} />
						<EmojiScore symbol="😢" value={this.getRating()[1]} gaugeColor={this.props.theme.emoji.sad} />
						<EmojiScore symbol="😨" value={this.getRating()[2]} gaugeColor={this.props.theme.emoji.worry} />
						<EmojiScore symbol="😡" value={this.getRating()[3]} gaugeColor={this.props.theme.emoji.angry} />
						<EmojiScore symbol="🤢" value={this.getRating()[4]} gaugeColor={this.props.theme.emoji.sick} />
					</EmojiScoreRow>
					<Link to="/">Vis historikk</Link>
				</Underlay>
			</div>
		);
	}
}

LineListItem.defaultProps = {
	name: 'Element uten navn'
};

export default withTheme(LineListItem);
