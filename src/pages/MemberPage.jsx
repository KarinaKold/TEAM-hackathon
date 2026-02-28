// import Progress from './Progress';
// import Badge from './Badge';
// import FavoriteButton from './FavoriteButton';

import { useParams } from 'react-router';
import { MEMBERS } from '../data';

export const MemberPage = () => {
	const { id } = useParams();
	const member = MEMBERS.find((pers) => pers.id === parseInt(id));
	const { name, age, img, descr, social, work } = member;

	if (!member) {
		return <div>Не найден</div>;
	}

	return (
		// <Breadcrumbs/>
		<>
			<div className="flex flex-col gap-5 text-center p-6">
				<img
					src={img}
					alt={name}
					className="rounded-full mb-4 border-4 border-blue-500 shadow-md"
				/>
				<h3 className="text-3xl font-bold text-gradient bg-clip-text text-transparent bg-linear-to-r from-purple-600 to-blue-400">
					{name}
				</h3>
				<p className="text-gray-600 text-lg">Возраст: {age}</p>
				<p className="w-2xl font-semibold text-gray-700">{descr}</p>
				<div className="w-3xs flex justify-center">
					<a
						href={social.telegram}
						target="_blank"
						rel="noopener noreferrer"
						className="text-xl text-blue-500 hover:text-blue-700 transition-colors duration-300"
					>
						Telegram
					</a>
					<a
						href={social.github}
						target="_blank"
						rel="noopener noreferrer"
						className="text-xl text-blue-500 hover:text-blue-700 transition-colors duration-300"
					>
						GitHub
					</a>
				</div>
				<div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-md">
					<h4 className="text-xl font-bold text-gray-800">
						Описание работы на проекте:
					</h4>
					<p className="mt-2 text-gray-600">{work}</p>
				</div>
			</div>
		</>
	);
};
