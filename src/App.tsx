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
	GREAT = 'great',
	GOOD = 'good',
	LIKE = 'like',
	STACK = 'stack',
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
				<h2 style={{ marginTop: 0, marginBottom: 0, textAlign: 'center' }}>
					Software engineer with {age.toString().substring(0, 12)} years
					industry experience.
					<br />
				</h2>
				<h3 style={{ color: '#bbbbbb', marginTop: 0 }}>
					React + Typescript nerd, lover of simple things that solve complex
					things.
				</h3>
				<h2 style={{ marginTop: '0.5em' }}>
					<TechLabel
						title="Things I'm great at"
						type={Skill.GREAT}
						callback={() =>
							skill === Skill.GREAT
								? setSkill(Skill.NONE)
								: setSkill(Skill.GREAT)
						}
					/>
					{' | '}
					<TechLabel
						title="Things I'm good at"
						type={Skill.GOOD}
						callback={() =>
							skill === Skill.GOOD ? setSkill(Skill.NONE) : setSkill(Skill.GOOD)
						}
					/>
					{' | '}
					<TechLabel
						title="Things I like"
						type={Skill.LIKE}
						callback={() =>
							skill === Skill.LIKE ? setSkill(Skill.NONE) : setSkill(Skill.LIKE)
						}
					/>
					{' | '}
					<TechLabel
						title="My current stack"
						type={Skill.STACK}
						callback={() =>
							skill === Skill.STACK
								? setSkill(Skill.NONE)
								: setSkill(Skill.STACK)
						}
					/>
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
					title="Favorite Auto Pet"
					url="https://favorite-pet.vercel.app/"
					image='url("https://raw.githubusercontent.com/jwyce/favorite-pet/main/public/pet-octopus.png")'
					bg="#26b1a5"
				/>
				<Project
					title="2x2x2 Rubik Solver"
					url="https://github.com/jwyce/2x2x2-Rubik-Solver"
					image={`url(${rubikImage})`}
					bg="#425b80"
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
