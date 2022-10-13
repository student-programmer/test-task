import React from 'react'
import { GlobalSvgSelector } from '../../assets/icons/shared/GlobalSvgSelector'
import p from './ProjectModule.module.scss'

type PropsTypes = {
	id:number,
	name: string
}


const ProjectsModule: React.FC<PropsTypes> = ({id, name}) => {
	return (
		<div className={p.wrapper}>
			<div>
				<GlobalSvgSelector id='projects-icon' />
			</div>
			<div>{name}</div>
		</div>
	);
};

export default ProjectsModule