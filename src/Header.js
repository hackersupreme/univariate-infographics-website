import React from 'react';
import Styles from './header.module.css';

import { BarChart, VerticalBar } from 'univariate-infographics';

const data = [
	{
		value: 1
	},
	{
		value: 1
	},
	{
		value: 1
	},
	{
		value: 1
	},
	{
		value: 1
	},
	{
		value: 1
	}
]

export default () => (
	<header className={Styles.container}>
		<h1 className={Styles.title}>
			univariate-infographics
		</h1>
		<VerticalBar 
			width={720}
			height={10}
			style={{margin: '0', padding: '0'}}
			data={[{value:1},{value:1}]}
		/>
		<code className={Styles.code}>
			npm install univariate-infographics
		</code>
		<code className={Styles.code}>
			import &#123; PieChart, PieSlice, BarChart, HorizontalBar, VerticalBar &#125; from 'univariate-infographics';
			<br />
			import 'univariate-infographics/dist/index.css';
		</code>
		<h2 className={Styles.header}>
			How to use
		</h2>
		<a 
			href="https://www.npmjs.com/package/univariate-infographics"
			className={Styles.link}>
			npm
		</a>
		<h2 className={Styles.header}>
			Documentation
		</h2>
		<a 
			href="https://github.com/hackersupreme/univariate-infographics"
			className={Styles.link}>
			github
		</a>
		<BarChart 
			width={1080}
			height={30}
			barWidth={140}
			baseColor={'#374a53'}
			data={data}
			style={{margin: '32px 0 0 0', padding: '0'}}
		/>
	</header>
)