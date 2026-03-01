// import Progress from './Progress';
// import Badge from './Badge';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { MEMBERS } from '../data';
import { Breadcrumbs, Button } from '../components';

export const MemberPage = () => {
	const { id } = useParams();
	const member = MEMBERS.find((pers) => pers.id === parseInt(id));
	const { name, age, img, descr, social, work } = member;

	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

		setIsFavorite(favorites.some((fav) => fav.id === member.id));
	}, [member.id]);

	const toggleFavorite = () => {
		const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

		if (isFavorite) {
			const updatedFavorites = favorites.filter((fav) => fav.id !== member.id);

			localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
			setIsFavorite(false);
		} else {
			favorites.push(member);

			localStorage.setItem('favorites', JSON.stringify(favorites));
			setIsFavorite(true);
		}
	};

	return (
		<>
			<div className="block p-6">
				<Breadcrumbs />
			</div>
			<div className="flex justify-center flex-col gap-5 p-6">
				<div className="flex justify-center">
					<img
						src={img}
						alt={name}
						className="rounded-full mb-4 border-4 border-blue-500 shadow-md"
					/>
				</div>
				<div className="flex justify-center pl-86">
					<Button onClick={toggleFavorite} color={isFavorite ? 'blue' : 'gray'}>
						{isFavorite ? 'From favorites' : 'To favorites'}
					</Button>
				</div>
				<div className="text-center space-y-4">
					<h3 className="text-3xl font-bold text-gradient bg-clip-text text-transparent bg-linear-to-r from-purple-600 to-blue-400">
						{name}
					</h3>
					<p className="text-gray-600 text-lg">Возраст: {age}</p>
				</div>

				<p className="w-2xl font-semibold text-gray-700">{descr}</p>
				<div className="w-3xs space-y-2">
					<p className="underline">Follow me:</p>
					<div className="w-3xs flex space-x-4">
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
				</div>
				<div className="mt-2 p-4 bg-gray-100 rounded-lg shadow-md">
					<h4 className="text-xl font-bold text-gray-800">
						Описание работы на проекте:
					</h4>
					<p className="mt-2 text-gray-600">{work}</p>
				</div>
			</div>
		</>
	);
};
