import React from 'react';
import Styles from './app.module.css';
import Header from './Header.js';
import Nav from './Nav.js';
import Examples from './Examples.js';
import Footer from './Footer.js';

import 'univariate-infographics/dist/index.css'

export default () => (
	<div className={Styles.container}>
		<Nav />
		<Header />
		<Examples />
		<Footer />
	</div>
)