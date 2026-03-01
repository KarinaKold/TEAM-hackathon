import { useState } from 'react';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { Link } from 'react-router';

export const Slider = ({ projects }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrev = () => {
		setCurrentIndex((prev) => Math.max(prev - 1, 0));
	};
	const handleNext = () => {
		setCurrentIndex((prev) => Math.min(prev + 1, projects.length - 1));
	};
	return (
		<div className="w-screen h-[50vh] ">
			<div className="text-center text-2xl mb-2.5">Проекты:</div>
			<div className="relative mx-auto flex items-center justify-center overflow-hidden w-2/3 h-full rounded-lg border-gray-600 bg-gray-500  text-white  ">
				<button
					className="absolute left-2 hover:cursor-pointer text-6xl disabled:cursor-not-allowed disabled:opacity-50"
					disabled={currentIndex === 0}
					onClick={handlePrev}
				>
					<GoChevronLeft />
				</button>
				<span className="font-bold text-shadow-gray-900 text-shadow-lg text-3xl text-center max-w-[80%] line-clamp-2">
					<Link
						to={projects[currentIndex]}
						target="_blank"
						rel="noopener noreferrer"
					>
						{projects[currentIndex]}
					</Link>
				</span>
				<button
					className=" hover:cursor-pointer absolute right-2  text-6xl disabled:cursor-not-allowed  disabled:opacity-50"
					onClick={handleNext}
					disabled={currentIndex === projects.length - 1}
				>
					<GoChevronRight />
				</button>
			</div>
		</div>
	);
};
