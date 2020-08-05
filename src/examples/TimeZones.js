import React from 'react';

import { PieSlice, PieChart } from 'univariate-infographics';

const data = [
	{
		value: 1
	},
	{
		value: 11
	}
]

const container = {
	display: 'flex',
	justifyContent: 'space-between',
	margin: '32px 0'
}

export default () => (
	<div style={container}>
		<PieSlice
			width={140}
			height={60}
			title="London"
			orientation={0}
			data={data}
			donut
			style={{margin: '0'}}
		/>
		<PieSlice
			width={140}
			height={20}
			title="New York"
			orientation={0.25}
			data={data}
			style={{margin: '0'}}
		/>
		<PieSlice
			width={140}
			height={20}
			title="Dubai"
			orientation={0.5}
			data={data}
			style={{margin: '0'}}
		/>
		<PieSlice
			width={140}
			height={20}
			title="Shanghai"
			orientation={0.6}
			data={data}
			style={{margin: '0'}}
		/>
		<PieSlice
			width={140}
			height={20}
			title="Los Angeles"
			orientation={0.3}
			data={data}
			style={{margin: '0'}}
		/>
	</div>
)