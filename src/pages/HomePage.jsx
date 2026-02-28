import { Dropdown } from '../components';

export const HomePage = () => {
	return (
		<main className="container mx-auto">
			<section className="bg-white p-6 rounded-lg shadow-md">
				<h2 className="text-2xl font-semibold">О команде</h2>
				<Dropdown />
			</section>
			<br />
			<section className="bg-white pl-6 pb-6 rounded-lg shadow-md">
				<h2 className="text-2xl font-semibold">Наша команда</h2>
				<div className="py-1">
					<a
						href="#"
						className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
					>
						Карина - Тимлид
					</a>
					<a
						href="#"
						className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
					>
						Мария - Фронтенд разработчик
					</a>
					<a
						href="#"
						className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
					>
						Максим - Фронтенд разработчик
					</a>
				</div>
			</section>
		</main>
	);
};
