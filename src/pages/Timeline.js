import React from 'react';
import { withTheme } from 'styled-components';

import LineListItem from 'components/LineListItem';
import data from 'services/Data';

function Timeline() {
	return (
		<div>
			<h1>Tidslinje</h1>
			<LineListItem
				id={data.procedures[0].id}
				procedureName={data.procedures[0].name}
				rating={data.procedures[0].userRatings[0].values}
			/>
			<LineListItem
				id={data.procedures[1].id}
				procedureName={data.procedures[1].name}
			/>
			<LineListItem
				id={data.procedures[2].id}
				procedureName={data.procedures[2].name}
				rating={data.procedures[2].userRatings[0].values}
			/>
		</div>
	);
}

export default withTheme(Timeline);
