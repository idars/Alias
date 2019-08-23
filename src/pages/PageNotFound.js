import React from 'react';
import { withTheme } from 'styled-components';

function PageNotFound() {
	return (
        <div>
            <h1>404</h1>
            <span>Page not found</span>
        </div>
    );
}

export default withTheme(PageNotFound);
