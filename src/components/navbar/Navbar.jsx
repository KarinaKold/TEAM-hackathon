import { Link, useLocation } from 'react-router';
import { NavbarLink } from './NavbarLink';

export const Navbar = () => {
	const location = useLocation();

	return (
		<nav className="flex justify-between text-2xl w-3xs">
			<NavbarLink path={'/'}>Главная</NavbarLink>
			<NavbarLink path={'/favorites'}>Избранные</NavbarLink>
		</nav>
	);
};
