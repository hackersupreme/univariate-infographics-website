import React from 'react';

import { HorizontalBar, VerticalBar } from 'univariate-infographics';

import { useWindowSize } from './useWindowSize';

import Styles from './examples.module.css';


const data = [
	{
		value: 10,
		label: 'Discovery'
	},
	{
		value: 20,
		label: 'Design'
	},
	{
		value: 20,
		label: 'Development'
	},
	{
		value: 10,
		label: 'Launch'
	},
]


export default () => {

	const windowSize = useWindowSize();
	let mobile = false;

	if ( windowSize.width < 860 ) {
		mobile = true;
	} 


	return (
	<div className={Styles.container}>
		<div className={Styles.headerContainer}>
			<p>
				Project Timeline
			</p>
			<code className={Styles.code}>
				{mobile ? 'VerticalBar' : 'HorizontalBar'}
			</code>
		</div>
		<div className={Styles.exampleContainer}>
			{
				mobile ? (
					<VerticalBar
						data={data}
						width={240}
						height={500}
						overlay
						overlayDataType={'label'}
						overlayColor={'white'}
						style={{fontSize: '12px', letterSpacing: '1px'}}
					/>
					) : (
					<HorizontalBar
						data={data}
						width={500}
						height={60}
						overlay
						overlayDataType={'label'}
						overlayColor={'white'}
						style={{fontSize: '12px', letterSpacing: '1px'}}
					/>
					)
			}
		</div>
	</div>
)}