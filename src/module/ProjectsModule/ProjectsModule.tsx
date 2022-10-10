import React from 'react'
import { GlobalSvgSelector } from '../../assets/icons/shared/GlobalSvgSelector'
import p from './ProjectsModule.module.scss'

const ProjectsModule = (projects: { id: number; name: string }[]) => {
	return (
		<div className={p.wrapper}>
			<div>
				<GlobalSvgSelector id='projects-icon' />
			</div>
			<div>{projects.name}</div>
		</div>
	);
};

export default ProjectsModule