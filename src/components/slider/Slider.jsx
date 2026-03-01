import { useState } from 'react';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

export const Slider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const names = ['Vadim', 'Karina', 'Maria', 'Maksim'];

	const handlePrev = () => {
		setCurrentIndex((prev) => Math.max(prev - 1, 0));
	};
	const handleNext = () => {
		setCurrentIndex((prev) => Math.min(prev + 1, names.length - 1));
	};
	return (
		<div className=" flex flex-col gap-2  w-screen h-[50vh] ">
			<div className="flex w-2/3 h-full border-gray-600 bg-gray-500 text-6xl text-white items-center relative">
				<button
					className="hover:cursor-pointer absolute left-2 disabled:cursor-not-allowed disabled:opacity-50"
					disabled={currentIndex === 0}
					onClick={handlePrev}
				>
					<GoChevronLeft />
				</button>
				<span className="animate-wobble-x font-bold text-shadow-gray-900 text-shadow-lg">
					{names[currentIndex]}
				</span>
				<button
					className=" hover:cursor-pointer absolute right-2 disabled:cursor-not-allowed  disabled:opacity-50"
					onClick={handleNext}
					disabled={currentIndex === names.length - 1}
				>
					<GoChevronRight />
				</button>
			</div>
		</div>
	);
};
