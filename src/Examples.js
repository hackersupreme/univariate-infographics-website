import React from 'react';
import Styles from './examples/examples.module.css';
import TimeZones from './examples/TimeZones.js';
import Awards from './examples/Awards.js';
import ProjectTimeline from './examples/ProjectTimeline.js';
import HeadShot from './examples/HeadShot.js';
import MealPlans from './examples/MealPlans.js';
import PageSpeeds from './examples/PageSpeeds.js';
import Percentages from './examples/Percentages.js';
import DailyUsage from './examples/DailyUsage.js';
import RememberTheName from './examples/RememberTheName.js';

export default () => {

	return (
		<main className={Styles.sectionContainer}>
			<h3 className={Styles.header}>Examples</h3>
			<ProjectTimeline />
			<DailyUsage />
			<Awards />
			<MealPlans />
			<Percentages />
			<HeadShot />
			<RememberTheName />
			<PageSpeeds />
		</main>
	)
}