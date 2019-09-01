import React from 'react';
import styled, { withTheme } from 'styled-components'

import EmojiScore from 'components/emojis/EmojiScore';

const Row = styled.div`
	display: flex;
	flex-direction: row;

	> div {
		margin: 8px;
	}
`;

class EmojiScoreRow extends React.Component {
    static defaultProps = {
        rating: {
            values: [0, 0, 0, 0, 0]
        }
    }

	render() {
		return (
			<div className={this.props.className} onClick={this.props.onClick}>
                <Row>
                    <EmojiScore symbol="😀" value={this.props.rating.values[0]} gaugeColor={this.props.theme.emoji.happy} />
                    <EmojiScore symbol="😢" value={this.props.rating.values[1]} gaugeColor={this.props.theme.emoji.sad} />
                    <EmojiScore symbol="😨" value={this.props.rating.values[2]} gaugeColor={this.props.theme.emoji.worry} />
                    <EmojiScore symbol="😡" value={this.props.rating.values[3]} gaugeColor={this.props.theme.emoji.angry} />
                    <EmojiScore symbol="🤢" value={this.props.rating.values[4]} gaugeColor={this.props.theme.emoji.sick} />
                </Row>
			</div>
		);
	}
}

export default withTheme(EmojiScoreRow);
