import { Outlet } from 'react-router';
import { Header } from './components/header/Header';

export const App = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};
