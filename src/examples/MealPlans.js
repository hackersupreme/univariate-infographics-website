import React from 'react';

import { PieChart } from 'univariate-infographics';

import Styles from './examples.module.css';


const unhealthy = [
	{
		value: 130,
		label: 'carbs',
		unit: 'g'
	},
	{
		value: 70,
		label: 'protein',
		unit: 'g'
	},
	{
		value: 120,
		label: 'fat',
		unit: 'g'
	}
]

const healthy = [
	{
		value: 100,
		label: 'carbs',
		unit: 'g'
	},
	{
		value: 150,
		label: 'protein',
		unit: 'g'
	},
	{
		value: 80,
		label: 'fat',
		unit: 'g'
	}
]


export default () => (
	<div className={Styles.container}>
		<div className={Styles.headerContainer}>
			<p>
				Dieting
			</p>
			<code className={Styles.code}>
				PieChart
			</code>
		</div>
		<div className={Styles.exampleContainer}>
			<PieChart
				width={180}
				height={180}
				title="Unhealthy"
				data={unhealthy}
				baseColor={'#84afc5'}
				legend
				legendDataType={'valueWithUnit'}
			/>
			<PieChart
				width={180}
				height={180}
				title="Healthy"
				data={healthy}
				legend
				legendDataType={'valueWithUnit'}
			/>
		</div>
	</div>
)