import './App.css';

import dayjs from 'dayjs';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import koiImage from './assets/koi.png';
import portfolioImage from './assets/portfolio.png';
import rubikImage from './assets/rubik.svg';

const YEAR_MILLIS = 1000 * 60 * 60 * 24 * 365;

enum Skill {
	NODE = 'node',
	REACT = 'react',
	GRAPHQL = 'graphql',
	OTHER = 'other',
	NONE = 'none',
}

export const App: React.FC = () => {
	const [age, setAge] = useState(
		dayjs().diff(dayjs('2020-02-10', 'year', true)) / YEAR_MILLIS
	);
	const [skill, setSkill] = useState(Skill.NONE);
	const controls = useAnimation();

	const refreshAge = () => {
		setAge(dayjs().diff(dayjs('2020-02-10', 'year', true)) / YEAR_MILLIS);
	};

	useEffect(() => {
		const timerId = setInterval(refreshAge, 50);
		return function cleanup() {
			clearInterval(timerId);
		};
	}, []);

	useEffect(() => {
		controls.start({
			scale: 1,
			transition: {
				type: 'spring',
				velocity: 5,
				stiffness: 400,
				damping: 40,
			},
		});
	}, [skill, controls]);

	let skillSection: undefined | React.ReactNode;
	let border = 'transparent';
	switch (skill) {
		case Skill.NODE:
			skillSection = (
				<motion.h3>
					Node, especially when combined with{' '}
					<span style={{ color: '#90c53f' }}>TypeScript</span>, is my language
					of choice for <span style={{ color: '#90c53f' }}>web servers</span>{' '}
					using <u>Express</u>. I've been using it for about{' '}
					<span style={{ color: '#90c53f' }}>2 years</span> now, and I'd call
					myself <span style={{ color: '#90c53f' }}>proficient</span>.
				</motion.h3>
			);
			border = '#90c53f';
			break;
		case Skill.REACT:
			skillSection = (
				<motion.h3>
					React (and React Native), Facebooks's library for creating
					cross-platform (<span style={{ color: '#5ec9f8' }}>iOS</span> and{' '}
					<span style={{ color: '#5ec9f8' }}>Android</span>){' '}
					<span style={{ color: '#5ec9f8' }}>mobile</span> and{' '}
					<span style={{ color: '#5ec9f8' }}>web apps</span>, is my favorite
					langauge to work in. I've created multiple apps (a few public and
					mostly private) over the{' '}
					<span style={{ color: '#5ec9f8' }}>2 years</span> I've used it and
					would say I'm <span style={{ color: '#5ec9f8' }}>proficient</span>.
				</motion.h3>
			);
			border = '#5ec9f8';
			break;
		case Skill.GRAPHQL:
			skillSection = (
				<motion.h3>
					GraphQL, Facebook's query language for creating{' '}
					<span style={{ color: '#e535ab' }}>dynamic APIs</span>, is now my
					preferred way (over REST) to build and consume APIs along with{' '}
					<span style={{ color: '#e535ab' }}>Apollo Server</span>. I've used it
					for almost <span style={{ color: '#e535ab' }}>1 year</span> now, and
					I'm still learning new things about it, but I'm{' '}
					<span style={{ color: '#e535ab' }}>intermediate</span> overall.
				</motion.h3>
			);
			border = '#e535ab';
			break;
		case Skill.OTHER:
			skillSection = (
				<motion.h3>
					I've also worked in{' '}
					<span style={{ color: '#9158f1' }}>.NET (C#)</span>,{' '}
					<span style={{ color: '#9158f1' }}>Java</span>, and a bit of{' '}
					<span style={{ color: '#9158f1' }}>Python</span>. And I mostly use{' '}
					<span style={{ color: '#9158f1' }}>Linux (WSL)</span> for my
					development environment and{' '}
					<span style={{ color: '#9158f1' }}>PostgreSQL</span> as my go-to
					database.
				</motion.h3>
			);
			border = '#9158f1';
			break;
	}

	return (
		<>
			<div className="main-container">
				<h1 style={{ marginBottom: 0, display: 'flex' }}>
					<span>{'{'}</span>
					<span className="name">Jared Wyce</span>
					<span style={{ marginLeft: '12px' }}>{'}'}</span>
				</h1>
				<h2 style={{ marginTop: 0, marginBottom: 0 }}>
					I'm a software engineer, developing professionally for{' '}
					{age.toString().substr(0, 12)} years
				</h2>
				<h2 style={{ marginTop: 0 }}>
					using technology like{' '}
					<span
						className="d"
						style={{ color: '#90c53f' }}
						onClick={() =>
							skill === Skill.NODE ? setSkill(Skill.NONE) : setSkill(Skill.NODE)
						}
					>
						Node.JS
					</span>
					,{' '}
					<span
						className="d"
						style={{ color: '#5ec9f8' }}
						onClick={() =>
							skill === Skill.REACT
								? setSkill(Skill.NONE)
								: setSkill(Skill.REACT)
						}
					>
						React
					</span>
					,{' '}
					<span
						className="d"
						style={{ color: '#e535ab' }}
						onClick={() =>
							skill === Skill.GRAPHQL
								? setSkill(Skill.NONE)
								: setSkill(Skill.GRAPHQL)
						}
					>
						GraphQL
					</span>
					, and{' '}
					<span
						className="d"
						style={{ color: '#9158f1' }}
						onClick={() =>
							skill === Skill.OTHER
								? setSkill(Skill.NONE)
								: setSkill(Skill.OTHER)
						}
					>
						others
					</span>
					.
				</h2>

				<h2 style={{ marginBottom: 0 }}>
					Check out my <a href="https://github.com/jwyce">GitHub</a> and{' '}
					<a href="https://www.linkedin.com/in/jaredwyce/">LinkedIn</a>
				</h2>
				<h2 style={{ marginTop: 0, marginBottom: '2em' }}>
					Business inquiry? <a href="mailto:wycejared@gmail.com">Email me!</a>
				</h2>
			</div>
			<div className="projects-container">
				<div className="project">
					<div
						className="project-image"
						onClick={() => window.open('https://gungi.io')}
						style={{
							cursor: 'pointer',
							backgroundImage: `url("https://raw.githubusercontent.com/jwyce/gungi.io/master/client/public/images/apple-touch-icon.png")`,
						}}
					/>
					<span className="project-title">Gungi.io</span>
				</div>
				{/* <div className="project">
					<div
						className="project-image"
						onClick={() => window.open('https://www.koianimelist.com/')}
						style={{
							cursor: 'pointer',
							backgroundImage: `url(${koiImage})`,
						}}
					/>
					<span className="project-title">Koi Anime (WIP)</span>
				</div> */}
				<div className="project">
					<div
						className="project-image"
						onClick={() =>
							window.open('https://github.com/jwyce/2x2x2-Rubik-Solver')
						}
						style={{
							cursor: 'pointer',
							backgroundImage: `url(${rubikImage})`,
							backgroundColor: '#3c3d5c',
						}}
					/>
					<span className="project-title">2x2x2 Rubik Solver</span>
				</div>
				<div className="project">
					<div
						className="project-image"
						onClick={() =>
							window.open('https://github.com/jwyce/portfolio/tree/master')
						}
						style={{
							cursor: 'pointer',
							backgroundImage: `url(${portfolioImage})`,
							backgroundColor: '#3c3836',
						}}
					/>
					<span className="project-title">Portfolio</span>
				</div>
			</div>
			<motion.div
				animate={controls}
				className="skill-container"
				style={{ border: `solid 3px ${border}` }}
			>
				{skillSection}
			</motion.div>
		</>
	);
};
