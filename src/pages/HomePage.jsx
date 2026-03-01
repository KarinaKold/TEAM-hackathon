import { Link } from 'react-router';
import { Dropdown } from '../components';
import { MEMBERS } from '../data';
import Badge from '../components/customBadge/UserBadge';

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
					{MEMBERS.map(({ id, name, badge, badgeColor }) => (
						<Link
							to={`/member/${id}`}
							key={id}
							className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex justify-between items-center"
						>
							<h5>{name}</h5>
							<div className="flex gap-2">
								{badge &&
									badge.map((b, index) => (
										<Badge
											key={index}
											color={b.color}
											content={b.text}
										/>
									))}
							</div>
						</Link>
					))}
				</div>
			</section>
		</main>
	);
};
