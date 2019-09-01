export default {
	user: [
        {
            id: 0,
            name: 'Captain Blåtann'
        }
    ],
	procedures: [
		{
			id: 0,
			name: 'Hello world',
			scheduledAt: '2019-08-27T10:30:00.000Z',
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
			scheduledAt: '2019-09-10T13:00:00.000Z',
			userRatings: undefined
		},
		{
			id: 2,
			name: 'Testing testing',
			scheduledAt: '2019-09-24T19:10:00.000Z',
			userRatings: [
				{
					date: '2019-08-24',
					values: [
						12, 12, 24, 0, 5
					]
				}
			]
		},
	]
};
