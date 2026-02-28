import { Link } from 'react-router';
import { Breadcrumbs } from './components/breadcrumps/Breadcrumbs';

export const App = () => {
	return (
		<div className="flex flex-col items-center">
			Hello team hackathon!!!
			<Link className="text-cyan-800" to="/about">
				About us
			</Link>
			<br />
		</div>
	);
};
