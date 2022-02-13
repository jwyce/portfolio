import './App.css';

import dayjs from 'dayjs';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';

// import koiImage from './assets/koi.png';
import portfolioImage from './assets/portfolio.png';
import rubikImage from './assets/rubik.svg';
import { Project } from './components/Project';
import { SkillSection } from './components/SkillSection';
import { TechLabel } from './components/TechLabel';
import { getColor } from './utils/getColor';

const YEAR_MILLIS = 1000 * 60 * 60 * 24 * 365;

export enum Skill {
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
					{age.toString().substring(0, 12)} years
				</h2>
				<h2 style={{ marginTop: 0 }}>
					using technology like{' '}
					<TechLabel
						title="Node.JS"
						type={Skill.NODE}
						callback={() =>
							skill === Skill.NODE ? setSkill(Skill.NONE) : setSkill(Skill.NODE)
						}
					/>
					,{' '}
					<TechLabel
						title="React"
						type={Skill.REACT}
						callback={() =>
							skill === Skill.REACT
								? setSkill(Skill.NONE)
								: setSkill(Skill.REACT)
						}
					/>
					,{' '}
					<TechLabel
						title="GraphQL"
						type={Skill.GRAPHQL}
						callback={() =>
							skill === Skill.GRAPHQL
								? setSkill(Skill.NONE)
								: setSkill(Skill.GRAPHQL)
						}
					/>
					, and{' '}
					<TechLabel
						title="others"
						type={Skill.OTHER}
						callback={() =>
							skill === Skill.OTHER
								? setSkill(Skill.NONE)
								: setSkill(Skill.OTHER)
						}
					/>
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
				<Project
					title="Gungi.io"
					url="https://gungi.io"
					image='url("https://raw.githubusercontent.com/jwyce/gungi.io/master/client/public/images/apple-touch-icon.png")'
				/>
				<Project
					title="2x2x2 Rubik Solver"
					url="https://github.com/jwyce/2x2x2-Rubik-Solver"
					image={`url(${rubikImage})`}
					bg="#472210"
				/>
				<Project
					title="Portfolio"
					url="https://github.com/jwyce/portfolio/tree/master"
					image={`url(${portfolioImage})`}
				/>
			</div>
			<motion.div
				animate={controls}
				className="skill-container"
				style={{ border: `solid 3px ${getColor(skill)}` }}
			>
				<SkillSection skill={skill} />
			</motion.div>
		</>
	);
};
