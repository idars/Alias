import React from 'react';
import styled, { withTheme } from 'styled-components'

import Emoji from 'components/emojis/Emoji';

const Row = styled.div`
    display: flex;
	flex-direction: row;

    > div {
        margin: 4px;
    }
`;

class EmojiRow extends React.Component {
    constructor(props) {
        super(props);
        this.showElement = this.showElement.bind(this);
    }

    showElement(index) {
        if (this.props.rating === undefined) {
            // Only show the inactive element if there is no rating
            return index === 6;
        }

        if (index >= 0 && index < 5) {
            return this.props.rating[index] > 50;
        } else if (index === 5) {
            // The neutral element should show only
            // if scores of other elements are between
            // 0 and 50
            for (let i = 0; i < 5; i++) {
                if (this.props.rating[i] > 50) return false;
            }
            return true;
        } else {
            return false;
        }
    }

	render() {
		return (
			<div className={this.props.className} onClick={this.props.onClick}>
                <Row>
                    {this.showElement(0) && <Emoji symbol="😀" />}
                    {this.showElement(1) && <Emoji symbol="😢" />}
                    {this.showElement(2) && <Emoji symbol="😨" />}
                    {this.showElement(3) && <Emoji symbol="😡" />}
                    {this.showElement(4) && <Emoji symbol="🤢" />}
                    {this.showElement(5) && <Emoji symbol="😐" />}
                    {this.showElement(6) && <Emoji inactive />}
                </Row>
			</div>
		);
	}
}

export default withTheme(EmojiRow);
