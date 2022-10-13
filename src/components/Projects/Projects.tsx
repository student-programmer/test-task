import React from 'react';
import p from './Projects.module.scss';
import projects from '../../api/api.json';
import ProjectsModule from '../../module/ProjectsModule/ProjectsModule';

const Projects = () => {
	return (
		<div className={p.wrapper}>
			{projects.map(project => (
				<ProjectsModule name={project.name} id={project.id} />
			))}
		</div>
	);
};

export default Projects;
