import { Link } from 'react-router';

export const App = () => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			Hello team hackathon!!!
			<Link to="/about">About us</Link>
		</div>
	);
};
