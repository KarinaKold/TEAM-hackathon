import { NavbarLink } from './NavbarLink';

export const Navbar = () => {
	return (
		<nav className="flex justify-between text-2xl w-3xs">
			<NavbarLink path={'/'}>Home</NavbarLink>
			<NavbarLink path={'/favorites'}>Favorites</NavbarLink>
		</nav>
	);
};
