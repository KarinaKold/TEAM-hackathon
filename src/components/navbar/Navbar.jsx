import { Link, useLocation } from 'react-router';

export const Navbar = () => {
	const location = useLocation();

	return (
		<nav className="bg-blue-600 p-2 flex w-screen justify-between items-center">
			<h1 className="text-white text-4xl font-bold">TEAM</h1>
			<div className="flex justify-between text-2xl">
				<Link
					to="/"
					className={`text-white px-4 py-2 rounded-md ${location.pathname === '/' ? 'font-bold cursor-default' : 'hover:bg-blue-800'}`}
				>
					Главная
				</Link>
				<Link
					to="/favorites"
					className={`text-white px-4 py-2 rounded-md ${location.pathname === '/favorites' ? 'font-bold cursor-default' : 'hover:bg-blue-800'}`}
				>
					Избранные
				</Link>
			</div>
		</nav>
	);
};
