import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import { Light, Spacious } from 'services/Themes';
import * as serviceWorker from './serviceWorker';

/* 
 * ThemeProvider and BrowserRouter must only wrap a single child node
 * https://www.styled-components.com/docs/advanced#theming
 * https://github.com/ReactTraining/react-router/issues/4009
 */
ReactDOM.render(
    <ThemeProvider theme={{...Light, ...Spacious}}>
		<BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
