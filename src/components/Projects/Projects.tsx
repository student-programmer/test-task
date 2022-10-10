import { useState } from 'react';
import p from './Projects.module.css';
import projects from '../../api/api.json';
import ProjectsModule from '../../module/ProjectsModule/ProjectsModule';

const Projects = () => {
	return (
		<div className={p.wrapper}>
			{projects.map(project => (
				<ProjectsModule projects={projects} />
			))}
		</div>
	);
};

export default Projects;
