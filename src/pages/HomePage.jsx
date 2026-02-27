import { Outlet } from 'react-router';
import { Dropdown, Navbar } from '../components';

export const HomePage = () => {
	return (
		<div className="flex flex-col items-center">
			<div className="bg-blue-600 py-2 flex w-screen justify-between items-center">
				<h1 className="text-white text-4xl font-bold">TEAM</h1>
				<Navbar />
			</div>
			<Dropdown />
			<Outlet />
		</div>
	);
};
