import React from 'react';

interface Props {
	id: string;
}

export const GlobalSvgSelector = ({ id }: Props) => {
	switch (id) {
		case 'header-menu':
			return (
				<svg
					width='16'
					height='16'
					viewBox='0 0 16 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M0 4H4V0H0V4ZM6 16H10V12H6V16ZM0 16H4V12H0V16ZM0 10H4V6H0V10ZM6 10H10V6H6V10ZM12 0V4H16V0H12ZM6 4H10V0H6V4ZM12 10H16V6H12V10ZM12 16H16V12H12V16Z'
						fill='#A1A1AA'
					/>
				</svg>
			);
		case 'share':
			return (
				<svg
					width='18'
					height='15'
					viewBox='0 0 18 15'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M7 4V0L0 7L7 14V9.9C12 9.9 15.5 11.5 18 15C17 10 14 5 7 4Z'
						fill='#A1A1AA'
					/>
				</svg>
			);
		case 'projects-icon':
			return (
				<svg
					width='18'
					height='18'
					viewBox='0 0 18 18'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M0.75 9.91667H8.08333V0.75H0.75V9.91667ZM0.75 17.25H8.08333V11.75H0.75V17.25ZM9.91667 17.25H17.25V8.08333H9.91667V17.25ZM9.91667 0.75V6.25H17.25V0.75H9.91667Z'
						fill='white'
					/>
				</svg>
			);

		default:
			return null;
	}
};
