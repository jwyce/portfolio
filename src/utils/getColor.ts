import { Skill } from 'src/App';

export const getColor = (skill: Skill) => {
	switch (skill) {
		case Skill.LIKE:
			return '#e535ab';
		case Skill.STACK:
			return '#9158f1';
		case Skill.GOOD:
			return '#61dafb';
		case Skill.GREAT:
			return '#90c53f';
	}
	return 'transparent';
};
