import React from 'react';

import { BarChart } from 'univariate-infographics';

import Styles from './examples.module.css';

const performance = [
	{
		value: 97,
		label: 'Site A',
		valueAndUnit: '97%'
	},
	{
		value: 40,
		label: 'Site B',
		valueAndUnit: '40%'
	},
		{
		value: 68,
		label: 'Site C',
		valueAndUnit: '68%'
	}
]

const bestPractices = [
	{
		value: 50,
		label: 'Site A',
		valueAndUnit: '50%'
	},
	{
		value: 35,
		label: 'Site B',
		valueAndUnit: '35%'
	},
		{
		value: 74,
		label: 'Site C',
		valueAndUnit: '74%'
	}
]

const accessibility = [
	{
		value: 92,
		label: 'Site A',
		valueAndUnit: '92%'
	},
	{
		value: 65,
		label: 'Site B',
		valueAndUnit: '65%'
	},
		{
		value: 77,
		label: 'Site C',
		valueAndUnit: '77%'
	}
]

const seo = [
	{
		value: 99,
		label: 'Site A',
		valueAndUnit: '99%'
	},
	{
		value: 55,
		label: 'Site B',
		valueAndUnit: '55%'
	},
		{
		value: 65,
		label: 'Site C',
		valueAndUnit: '65%'
	}
]


export default () => (
	<div className={Styles.container}>
		<div className={Styles.headerContainer}>
			<p>
				Site Metrics
			</p>
			<code className={Styles.code}>
				BarChart
			</code>
		</div>
		<div className={Styles.exampleContainer}>
			<BarChart
				width={400}
				height={120}
				barWidth={50}
				data={performance}
				legend
				legendDataType={'label'}
				overlay
				overlayDataType={'valueAndUnit'}
				overlayColor={'white'}
				title={'Performance'}
			/>
			<BarChart
				width={400}
				height={120}
				barWidth={50}
				data={bestPractices}
				legend
				legendDataType={'label'}
				overlay
				overlayDataType={'valueAndUnit'}
				overlayColor={'white'}
				title={'Best Practices'}
			/>
			<BarChart
				width={400}
				height={120}
				barWidth={50}
				data={accessibility}
				legend
				legendDataType={'label'}
				overlay
				overlayDataType={'valueAndUnit'}
				overlayColor={'white'}
				title={'Accessibility'}
			/>
			<BarChart
				width={400}
				height={120}
				barWidth={50}
				data={seo}
				legend
				legendDataType={'label'}
				overlay
				overlayDataType={'valueAndUnit'}
				overlayColor={'white'}
				title={'SEO'}
			/>
		</div>
	</div>
)