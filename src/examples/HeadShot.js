import React from 'react';

import { PieSlice } from 'univariate-infographics';

import Styles from './examples.module.css';


const data = [
	{
		value: 2
	},
	{
		value: 8
	}
]

export default () => (
	<div className={Styles.container}>
		<div className={Styles.headerContainer}>
			<p>
				People
			</p>
			<code className={Styles.code}>
				PieSlice
			</code>
		</div>
		<div className={Styles.exampleContainer}>
			<PieSlice
				width={120}
				height={120}
				data={data}
				orientation={0.4}
				donut
				donutColor={"#fbd4ac"}
			/>
			<PieSlice
				width={120}
				height={120}
				data={data}
				orientation={0.4}
				donut
				donutColor={"#cc9264"}
			/>
			<PieSlice
				width={120}
				height={120}
				data={data}
				orientation={0.4}
				donut
				donutColor={"#ab6634"}
			/>
			<PieSlice
				width={120}
				height={120}
				data={data}
				orientation={0.4}
				donut
				donutColor={"#5c4034"}
			/>
		</div>
	</div>
)