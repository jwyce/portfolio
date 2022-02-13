import { Skill } from 'src/App';

export const getColor = (skill: Skill) => {
	switch (skill) {
		case Skill.GRAPHQL:
			return '#e535ab';
		case Skill.OTHER:
			return '#9158f1';
		case Skill.REACT:
			return '#61dafb';
		case Skill.NODE:
			return '#90c53f';
	}
	return 'transparent';
};
