import ProgressBar from '../components/skillBar/SkillBar';

import { useParams } from 'react-router';
import { MEMBERS } from '../data';
import { Breadcrumbs, FavButton, Slider, UserBadge } from '../components';

export const MemberPage = () => {
	const { id } = useParams();
	const member = MEMBERS.find((pers) => pers.id === parseInt(id));
	const { name, age, img, descr, social, work, badge, projects } = member;

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
						className="w-100 h-100 rounded-full border-4 border-blue-500 shadow-md"
					/>
				</div>
				<FavButton member={member} />
				<div className="text-center space-y-4">
					<h3 className="text-3xl font-bold text-gradient bg-clip-text text-transparent bg-linear-to-r from-purple-600 to-blue-400">
						{name}
					</h3>
					<p className="text-gray-600 text-lg">Возраст: {age}</p>
				</div>

				<div className="mt-4 p-6 bg-gray-100 rounded-xl shadow-md">
					<h4 className="text-lg font-bold text-gray-800 mb-2">О себе</h4>
					<p className="text-gray-700 leading-relaxed">{member.descr}</p>
				</div>

				{/* 1 block contact */}
				<div className="mt-2 p-6 bg-gray-100 rounded-xl shadow-md flex flex-col md:flex-row gap-8 items-stretch">
					<div className="md:w-1/5 flex flex-col">
						<h4 className="font-bold text-gray-800 mb-3">Связь</h4>
						<div className="flex flex-col gap-2">
							<a
								href={member.social?.telegram}
								className="text-blue-500 hover:underline"
							>
								Telegram
							</a>
							<a
								href={member.social?.github}
								className="text-gray-700 hover:underline"
							>
								GitHub
							</a>
						</div>
					</div>

					{/* 2 block work project */}
					<div className="md:w-2/5 border-l border-r border-gray-300 px-6">
						<h4 className="font-bold text-gray-800 mb-2">
							Работа на проекте:
						</h4>

						<p className="text-gray-600 italic">"{member.work}"</p>
					</div>

					{/* 3 block skills and badges */}
					<div className="md:w-2/5 flex flex-col gap-4">
						<h4 className="font-bold text-gray-800">Навыки и Роли</h4>

						<div className="flex flex-wrap gap-2 mb-2">
							{member.badge &&
								member.badge.map((b, index) => (
									<UserBadge
										key={index}
										color={b.color}
										content={b.text}
									/>
								))}
						</div>

						<div className="space-y-3">
							{member.progress?.map((item, index) => (
								<ProgressBar
									key={index}
									label={item.technology}
									percentage={item.percentage}
								/>
							))}
						</div>
					</div>
				</div>
				<Slider projects={projects} />
			</div>
		</>
	);
};
