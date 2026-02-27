import { Link } from 'react-router';

export const Dropdown = () => {
	return (
		<div>
			Hello team hackathon!!!
			<Link className="text-cyan-800" to="/about">
				About us
			</Link>
		</div>
	);
};
