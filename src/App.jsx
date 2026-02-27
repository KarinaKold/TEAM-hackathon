import { Link } from 'react-router';

export const App = () => {
	return (
		<div className="flex flex-col items-center">
			Hello team hackathon!!!
			<Link className="text-cyan-800" to="/about">
				About us
			</Link>
		</div>
	);
};
