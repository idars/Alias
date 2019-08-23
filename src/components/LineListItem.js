import React from 'react';
import { Link } from 'react-router-dom';
import styled, { withTheme } from 'styled-components';

import Emoji from 'components/emojis/Emoji';
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
	
	> div {
		display: flex;
	}
`;

class LineListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dropdown: false
		};

		this.toggleDropdown = this.toggleDropdown.bind(this);
	}

	getRating(index) {
		if (this.props.rating === undefined) return 0;
		return this.props.rating[index];
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
					<Link to={"/procedure/" + this.props.id}>{this.props.name || 'Element uten navn'}</Link>
					<Emoji onClick={this.toggleDropdown}>{this.props.emojiStatus}</Emoji>
				</Overlay>
				<Underlay active={this.state.dropdown}>
					<div>
						<EmojiScore emoji="😀" value={this.getRating(0)} gaugeColor={this.props.theme.emoji.happy} />
						<EmojiScore emoji="😢" value={this.getRating(1)} gaugeColor={this.props.theme.emoji.sad} />
						<EmojiScore emoji="😨" value={this.getRating(2)} gaugeColor={this.props.theme.emoji.worry} />
						<EmojiScore emoji="😡" value={this.getRating(3)} gaugeColor={this.props.theme.emoji.angry} />
						<EmojiScore emoji="🤢" value={this.getRating(4)} gaugeColor={this.props.theme.emoji.sick} />
					</div>
					<Link to="/">Vis historikk</Link>
				</Underlay>
			</div>
		);
	}
}

export default withTheme(LineListItem);
