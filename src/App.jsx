import { Link, Outlet } from 'react-router';
import { Navbar } from './components';

export const App = () => {
	return (
		<div className="flex flex-col items-center">
			<Navbar />
			Hello team hackathon!!!
			<Link className="text-cyan-800" to="/about">
				About us
			</Link>
			<Outlet />
		</div>
	);
};
