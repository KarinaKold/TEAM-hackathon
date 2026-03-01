import { Dropdown, MemberCard } from '../components';
import { MEMBERS } from '../data';

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
						<MemberCard key={member.id} member={member} />
					))}
				</div>
			</section>
		</main>
	);
};
