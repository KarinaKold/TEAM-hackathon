import { Link, useLocation } from 'react-router';

export const NavbarLink = ({ children, path }) => {
	const location = useLocation();

	return (
		<Link
			to={path}
			className={`text-white px-4 py-2 rounded-md ${location.pathname === path ? 'font-bold cursor-default' : 'hover:bg-blue-800'}`}
		>
			{children}
		</Link>
	);
};
