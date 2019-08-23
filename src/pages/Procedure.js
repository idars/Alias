import React from 'react';
import styled, { withTheme } from 'styled-components';
import { ArrowLeft, ArrowRight, X } from 'react-feather';
import { withRouter } from 'react-router-dom';

import Emoji from 'components/emojis/Emoji';

class Procedure extends React.Component {
    componentDidMount() {

    }

    componentWillUnmount() {
        
    }

    render() {
        return (
            <div>
                <div>
                    <X onClick={this.props.history.goBack} />
                    <span>{this.props.procedureName}</span>
                    <Emoji></Emoji>
                </div>
                <div>
                    <ArrowLeft />
                    <img></img>
                    <ArrowRight />
                </div>
                <div>
                    <span></span>
                </div>
            </div>
        );
    }	
}

export default withTheme(withRouter(Procedure));
