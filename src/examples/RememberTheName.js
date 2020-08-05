import React from 'react';

import { VerticalBar } from 'univariate-infographics';

import { useWindowSize } from './useWindowSize.js';

import Styles from './examples.module.css';

const data = [
	{
		value: 10,
		label: 'luck'
	},
	{
		value: 20,
		label: 'skill'
	},
	{
		value: 15,
		label: 'concentrated power of will'
	},
	{
		value: 5,
		label: 'pleasure'
	},
	{
		value: 50,
		label: 'pain'
	}
]

export default () => {

	const windowSize = useWindowSize();
	let width = 500;

	if ( windowSize.width < 860 && windowSize.width > 560 ) {
		width = 420;
	} else if ( windowSize.width < 560 ) {
		width = 260;
	}

	return (
	<div className={Styles.container}>
		<div className={Styles.headerContainer}>
			<p>
				Ft. Minor
			</p>
			<code className={Styles.code}>
				VerticalBar
			</code>
		</div>
		<div className={Styles.exampleContainer}>
			<VerticalBar
				width={width}
				height={200}
				data={data}
				legend
			/>
		</div>
	</div>
)}