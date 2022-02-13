import React from 'react';
import { Skill } from 'src/App';
import { getColor } from 'src/utils/getColor';

interface TechLabelProps {
	title: string;
	type: Skill;
	callback: () => void;
}

export const TechLabel: React.FC<TechLabelProps> = ({
	title,
	type,
	callback,
}) => {
	return (
		<span className="d" style={{ color: getColor(type) }} onClick={callback}>
			{title}
		</span>
	);
};
