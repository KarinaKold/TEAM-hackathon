import { Navbar } from '../navbar/Navbar';

export const Header = () => {
	return (
		<header className="items-center">
			<div className="bg-blue-600 pl-40 pr-40 py-2 flex w-screen justify-between items-center">
				<h1 className="text-white text-4xl font-bold">TEAM</h1>
				<Navbar />
			</div>
		</header>
	);
};
