import React from 'react';

interface ProjectProps {
	title: string;
	image: string;
	url: string;
	bg?: string;
}

export const Project: React.FC<ProjectProps> = ({ url, title, image, bg }) => {
	return (
		<div className="project">
			<div
				className="project-image"
				onClick={() => window.open(url)}
				style={{
					cursor: 'pointer',
					backgroundImage: image,
					backgroundColor: bg ?? 'transparent',
				}}
			/>
			<span className="project-title">{title}</span>
		</div>
	);
};
