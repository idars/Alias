import React from 'react';
import { withRouter } from 'react-router-dom';
import styled, { withTheme } from 'styled-components';
import { ArrowLeft, ArrowRight, X } from 'styled-icons/feather';

import Emoji from 'components/emojis/Emoji';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const Header = styled.div`
    display: flex;
    flex: none;
    justify-content: space-between;
    margin: ${props => props.theme.margin.medium};
`;

const Main = styled.div`
    display: flex;
    flex: auto;
    justify-content: space-between;
    margin: ${props => props.theme.margin.medium};

    img {
        height: '400px';
        width: '400px';
    }
`;

const Footer = styled.div`
    flex: none;
    margin: ${props => props.theme.margin.medium};
    text-align: center;
`;

class Procedure extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            totalPages: 1
        }
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        
    }

    getDescription() {

    }

    nextPage() {
        if (this.page === this.state.totalPages - 1) return;
        this.setState({
            page: this.page + 1
        });
    }

    previousPage() {
        if (this.page === 0) return;
        this.setState({
            page: this.page - 1
        });
    }

    render() {
        return (
            <Container>
                <Header>
                    <X onClick={this.props.history.goBack} />
                    <span>{this.props.procedureName || 'Prosedyre uten navn'}</span>
                    <Emoji></Emoji>
                </Header>
                <Main>
                    <ArrowLeft onClick={this.previousPage} />
                    <img></img>
                    <ArrowRight onClick={this.nextPage} />
                </Main>
                <Footer>
                    <span>Description</span>
                </Footer>
            </Container>
        );
    }	
}

export default withTheme(withRouter(Procedure));
