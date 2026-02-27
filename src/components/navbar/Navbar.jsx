import { NavbarLink } from './NavbarLink';

export const Navbar = () => {
	return (
		<nav className="flex justify-between text-2xl w-3xs">
			<NavbarLink path={'/'}>Главная</NavbarLink>
			<NavbarLink path={'/favorites'}>Избранные</NavbarLink>
		</nav>
	);
};
