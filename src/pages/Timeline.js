import React from 'react';
import { withTheme } from 'styled-components';

import LineListItem from 'components/LineListItem';
import data from 'services/Data';

class Timeline extends React.Component {
	render() {
		const lineList = data.procedures.map((data) => 
			<LineListItem {...data} />
		);

		return (
			<div>
				{lineList}
				{ /* <h2>Neste prosedyre</h2> */ }
				{ /* <h2>Neste uke</h2> */ }
			</div>
		);
	}
}

export default withTheme(Timeline);
