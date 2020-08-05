import React from 'react';

import { PieSlice } from 'univariate-infographics';

import Styles from './examples.module.css';

const data = [
	{
		value: 1
	},
	{
		value: 9
	}
]


export default () => (
	<div className={Styles.container}>
		<div className={Styles.headerContainer}>
			<p>
				Awards
			</p>
			<code className={Styles.code}>
				PieSlice
			</code>
		</div>
		<div className={Styles.exampleContainer}>
			<PieSlice
				width={100}
				height={60}
				title="Gold"
				orientation={0.95}
				data={data}
				donut
				donutColor={"gold"}
			/>
			<PieSlice
				width={100}
				height={60}
				title="Silver"
				orientation={0.95}
				data={data}
				donut
				donutColor={"silver"}
			/>
			<PieSlice
				width={100}
				height={60}
				title="Bronze"
				orientation={0.95}
				data={data}
				donut
				donutColor={"#cd7f32"}
			/>
		</div>
	</div>
)