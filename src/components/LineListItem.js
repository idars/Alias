import React from 'react';
import { Link } from 'react-router-dom';
import EmojiScore from 'components/emojis/EmojiScore';
import EmojiStatus from 'components/emojis/EmojiStatus';
import styled, { withTheme } from 'styled-components';

const itemWidth = '600px';

const Overlay = styled.div`
	align-items: center;
    background: #56CCF2;
    color: #ffffff;
    display: flex;
	justify-content: space-between;
	max-width: ${itemWidth};
    padding: 8px;
`;

const Underlay = styled.div`
	align-items: center;
    background: #303030;
    color: #ffffff;
    display: flex;
	justify-content: space-between;
	max-width: ${itemWidth};
	padding: 8px;
	
	> div {
		display: flex;
	}
`;

class LineListItem extends React.Component {
	getRating(index) {
		if (this.props.rating === undefined) return 0;
		return this.props.rating[index];
	}

	render() {
		return (
			<div className={this.props.className}>
				<Overlay>
					<Link to="/">{this.props.name || 'Element uten navn'}</Link>
					<EmojiStatus>{this.props.emojiStatus}</EmojiStatus>
				</Overlay>
				<Underlay>
					<div>
						<EmojiScore emoji="😀" value={this.getRating(0)} gaugeColor={this.props.theme.happy} />
						<EmojiScore emoji="😢" value={this.getRating(1)} gaugeColor={this.props.theme.sad} />
						<EmojiScore emoji="😨" value={this.getRating(2)} gaugeColor={this.props.theme.worry} />
						<EmojiScore emoji="😡" value={this.getRating(3)} gaugeColor={this.props.theme.angry} />
						<EmojiScore emoji="🤢" value={this.getRating(4)} gaugeColor={this.props.theme.sick} />
					</div>
					<Link to="/">Vis historikk</Link>
				</Underlay>
			</div>
		);
	}
}

export default withTheme(LineListItem);
