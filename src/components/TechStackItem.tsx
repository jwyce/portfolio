import React from 'react';

interface TechStackItemProps {
	url: string;
	href: string;
	name: string;
}

export const TechStackItem: React.FC<TechStackItemProps> = ({
	name,
	url,
	href,
}) => {
	return (
		<a href={href}>
			<div className="tech-stack-item">
				<img alt={name} src={url} height={75} width={75} />
				<div>
					<b>{name}</b>
				</div>
			</div>
		</a>
	);
};
