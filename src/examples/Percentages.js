import React from 'react';

import { PieChart, PieSlice, HorizontalBar, VerticalBar } from 'univariate-infographics';

import { useWindowSize } from './useWindowSize.js';

import Styles from './examples.module.css';

const twenty = [
	{
		value: 2
	},
	{
		value: 8
	}
]

const thirty = [
	{
		value: 3
	},
	{
		value: 7
	}
]

const seventy = [
	{
		value: 7
	},
	{
		value: 3
	}
]

export default () => {

	const windowSize = useWindowSize();
	let size = 100;

	if ( windowSize.width < 860 && windowSize.width > 560 ) {
		size = 75;
	} else if ( windowSize.width < 560 ) {
		size = 70;
	}


	return (
	<div className={Styles.container}>
		<div className={Styles.headerContainer}>
			<p>
			Percentages
			</p>
			<code className={Styles.code}>
				PieChart
			</code>
			<code className={Styles.code}>
				PieSlice
			</code>
			<code className={Styles.code}>
				HorizontalBar
			</code>
			<code className={Styles.code}>
				VerticalBar
			</code>
		</div>
		<div className={Styles.exampleContainer}>
			<PieChart
				width={size}
				height={size}
				data={twenty}
				donut
				donutColor={"white"}
				title={"20%"}
			/>
			<PieChart
				width={size}
				height={size}
				data={thirty}
				donut
				donutColor={"white"}
				title={"30%"}
			/>
			<PieChart
				width={size}
				height={size}
				data={seventy}
				donut
				donutColor={"white"}
				title={"70%"}
			/>
			<PieSlice
				width={size}
				height={size}
				data={twenty}
				donut
				donutColor={"white"}
				title={"20%"}
			/>
			<PieSlice
				width={size}
				height={size}
				data={thirty}
				donut
				donutColor={"white"}
				title={"30%"}
			/>
			<PieSlice
				width={size}
				height={size}
				data={seventy}
				donut
				donutColor={"white"}
				title={"70%"}
			/>
			<HorizontalBar
				width={size}
				height={size}
				data={twenty}
				title={"20%"}
			/>
			<HorizontalBar
				width={size}
				height={size}
				data={thirty}
				title={"30%"}
			/>
			<HorizontalBar
				width={size}
				height={size}
				data={seventy}
				title={"70%"}
			/>
			<VerticalBar
				width={size}
				height={size}
				data={twenty}
				title={"20%"}
			/>
			<VerticalBar
				width={size}
				height={size}
				data={thirty}
				title={"30%"}
			/>
			<VerticalBar
				width={size}
				height={size}
				data={seventy}
				title={"70%"}
			/>
		</div>
	</div>
)}