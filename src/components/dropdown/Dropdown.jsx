import { useState } from 'react';
import { TeamInfo } from './TeamInfo';

export const Dropdown = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div className="relative inline-block">
			<button
				onClick={toggleDropdown}
				className="cursor-pointer pt-3 text-blue-500 focus:outline-none"
			>
				<svg
					className={`w-5 h-5 duration-300 -rotate-90 ${isOpen ? 'rotate-0' : ''}`}
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path strokeWidth="5" d="M7 10l5 5 5-5H7z" />
				</svg>
			</button>
			{isOpen && <TeamInfo />}
		</div>
	);
};
