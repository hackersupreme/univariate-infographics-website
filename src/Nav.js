import React from 'react';
import { PieChart } from 'univariate-infographics';

import { useSpring } from 'react-spring';

const Style = {
	position: 'absolute',
	width: '100%',
	margin: '0px',
	display: 'flex',
	justifyContent: 'space-between'
}

const data = [
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
	<nav style={Style}>
		<PieChart
			width={20}
			height={20}
			data={data}
			style={{margin: '8px', fontSize: '12px'}}
			title={"UI"}
			titleColor={'#7a868b'}
		/>
		<p style={{margin: '12px 8px', color: '#7a868b'}}>Built by <a href="http://hackersupreme.com" style={{color: '#7a868b'}}>Hacker Supreme</a></p>
	</nav>
)