import React from 'react';

import { GlobalSvgSelector } from '../../assets/icons/shared/GlobalSvgSelector';
import logo from './Logo.module.scss';

const Logo = () => {
	return (
		<div className={logo.wrapper}>
			<div className={logo.topLevelItem}>
				<div className={logo.topItems}>
					<GlobalSvgSelector id='header-menu' />
				</div>
				<div className={logo.topItems}>
					{' '}
					<GlobalSvgSelector id='share' />
				</div>
				<div className={logo.topList}>
					<ul className={logo.topList__list}>
						<li className={logo.topList__item}>Просмотр</li>
						<li className={logo.topList__item}>Управление</li>
					</ul>
				</div>
			</div>
			<div className={logo.bottomLevelItem}>
				<div className={logo.name_project}>Название проекта:</div>
				<div className={logo.projects}>
					<ul>
						<li>Строительно монтажные работы</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Logo;
