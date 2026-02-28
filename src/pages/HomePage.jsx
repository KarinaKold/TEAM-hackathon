import { Dropdown } from '../components';

const MEMBERS = [
	{
		id: 1,
		name: 'Карина',
		age: '',
		img: '',
		descr: '',
		contacts: '',
		role: '',
	},
	{
		id: 2,
		name: 'Мария',
		age: '',
		img: '',
		descr: '',
		contacts: '',
		role: '',
	},
	{
		id: 3,
		name: 'Максим',
		age: '',
		img: '',
		descr: '',
		contacts: '',
		role: '',
	},
];

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
					{MEMBERS.map((member) => (
						<a
							href="#"
							className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
						>
							{member.name}
						</a>
					))}
				</div>
			</section>
		</main>
	);
};
