import React from 'react';
import { withTheme } from 'styled-components';

import LineListItem from 'components/LineListItem';

function Timeline() {
	return (
		<div>
			<h1>Tidslinje</h1>
			<LineListItem
				id={data.procedures[0].id}
				name={data.procedures[0].name}
				emojiStatus='😡'
				rating={data.procedures[0].userRatings[0].values}
			/>
			<LineListItem
				id={data.procedures[1].id}
				name={data.procedures[1].name}
			/>
		</div>
	);
}

const data = {
	user: {
		id: 0,
		name: 'Captain Blåtann'
	},
	procedures: [
		{
			id: 0,
			name: 'Hello world',
			scheduledAt: '2019-08-10 10:30:00',
			userRatings: [
				{
					date: '2019-06-24',
					values: [
						54, 12, 5, 76, 14
					]
				}
			]
		},
		{
			id: 1,
			name: 'Keep calm and do your procedures',
			scheduledAt: '2019-08-10 13:00:00',
			userRatings: []
		}
	]
};

export default withTheme(Timeline);
