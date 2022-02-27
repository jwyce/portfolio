import { Skill } from 'src/App';

export const getColor = (skill: Skill) => {
	switch (skill) {
		case Skill.DEVOPS:
			return '#e535ab';
		case Skill.OTHER:
			return '#9158f1';
		case Skill.FRONTEND:
			return '#61dafb';
		case Skill.BACKEND:
			return '#90c53f';
	}
	return 'transparent';
};
