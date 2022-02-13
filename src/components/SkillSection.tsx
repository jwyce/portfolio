import { motion } from 'framer-motion';
import React from 'react';
import { Skill } from 'src/App';

interface SkillProps {
	skill: Skill;
}

export const SkillSection: React.FC<SkillProps> = ({ skill }) => {
	switch (skill) {
		case Skill.NODE:
			return (
				<motion.h3>
					Node, especially when combined with{' '}
					<span style={{ color: '#90c53f' }}>TypeScript</span>, is my language
					of choice for <span style={{ color: '#90c53f' }}>web servers</span>{' '}
					using <u>Express</u>. I've been using it for about{' '}
					<span style={{ color: '#90c53f' }}>2 years</span> now, and I'd call
					myself <span style={{ color: '#90c53f' }}>proficient</span>.
				</motion.h3>
			);
		case Skill.REACT:
			return (
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
		case Skill.GRAPHQL:
			return (
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
		case Skill.OTHER:
			return (
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
		default:
			return <></>;
	}
};
