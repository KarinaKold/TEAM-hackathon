import { Outlet } from 'react-router';
import { Dropdown, Navbar } from '../components';

export const HomePage = () => {
	return (
		<div className="flex flex-col items-center">
			<Navbar />
			<Dropdown />
			<Outlet />
		</div>
	);
};
