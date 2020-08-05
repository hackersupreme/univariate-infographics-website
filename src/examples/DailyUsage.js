import React from 'react';

import { BarChart } from 'univariate-infographics';

import { useWindowSize } from './useWindowSize.js';

import Styles from './examples.module.css';

const data = [
	{
		value: 16,
		label: '12 pm',
		mobile: '12'
	},
	{
		value: 45,
		label: '1 pm',
		mobile: '1'
	},
	{
		value: 96,
		label: '2 pm',
		mobile: '2'
	},
	{
		value: 70,
		label: '3 pm',
		mobile: '3'
	},
	{
		value: 67,
		label: '4 pm',
		mobile: '4'
	},
	{
		value: 55,
		label: '5 pm',
		mobile: '5'
	},
	{
		value: 45,
		label: '6 pm',
		mobile: '6'
	},
	{
		value: 12,
		label: '7 pm',
		mobile: '7'
	}
]

export default () => {

	const windowSize = useWindowSize();
	let width = 600;
	let type = 'label';

	if ( windowSize.width < 860 && windowSize.width > 560 ) {
		width = 420;
	} else if ( windowSize.width < 560 ) {
		width = 260;
		type = 'mobile'
	}


	return (
	<div className={Styles.container}>
		<div className={Styles.headerContainer}>
			<p>
				Popular Times
			</p>
			<code className={Styles.code}>
				BarChart
			</code>
		</div>
		<div className={Styles.exampleContainer}>
			<BarChart
				width={width}
				height={200}
				data={data}
				legend
				legendDataType={type}
				title={'desired nap time'}
			/>
		</div>
	</div>
)}