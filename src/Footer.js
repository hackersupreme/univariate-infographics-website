import React from 'react';

import Styles from './footer.module.css';

import { VerticalBar, HorizontalBar } from 'univariate-infographics';

const copy = {
	lineHeight: '2em',
	color: '#2f383c',
	fontSize: '1.25em',
	margin: '24px 0px'
}

const header = {
	textTransform: 'uppercase',
	letterSpacing: '2px',
	color: '#2f383c'
}

const subheader = {
	fontWeight: 'normal',
	padding: '0px 0px 32px 0px',
	color: '#2f383c'
}

export default () => (
	<footer className={Styles.container}>
		<section className={Styles.contentWrap}>
			<h2 style={header}>
				Our UserBase Is Extremely Shy 
			</h2>
			<h3 style={subheader}>
				Here's What They'd Say If They Had More Confidence And Left Reviews
			</h3>
			<HorizontalBar 
			width={120}
			height={5}
			style={{margin: '0', padding: '0', display: 'block'}}
			data={[{value:1},{value:1}]}
			/>
			<p style={copy}>
				"It's really cool that this library builds <strong>scalable SVG graphics</strong> that retain their sharpness no matter the size."
			</p>
			<HorizontalBar 
			width={120}
			height={5}
			style={{margin: '0', padding: '0', display: 'block'}}
			data={[{value:1},{value:1}]}
			/>
			<p style={copy}>
				"Finally, a component library that includes both 
				a <strong>Pie Chart</strong>, <strong>Bar Chart</strong>, 
				and three other charts I've definitely heard of, 
				a <strong>Pie Slice</strong>, a <strong>Horizontal Bar</strong>, 
				and a <strong>Vertical Bar</strong>."
			</p>
			<HorizontalBar 
			width={120}
			height={5}
			style={{margin: '0', padding: '0', display: 'block'}}
			data={[{value:1},{value:1}]}
			/>
			<p style={copy}>
				"I like when a library is <strong>supremely composable</strong>,
				with a variety of props that make it easy to configure, like this library is."
			</p>
			<VerticalBar 
			width={720}
			height={10}
			style={{margin: '0px', padding: '32px 0px'}}
			data={[{value:1},{value:1}]}
		/>
			<aside>
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
			</aside>
			<div className={Styles.copyrightContainer}>
				<p>&copy; 2020 <a href="http://hackersupreme.com">Hacker Supreme</a></p>
			</div>
		</section>
	</footer>
)