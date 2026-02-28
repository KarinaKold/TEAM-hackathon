import { Breadcrumbs } from '../components/breadcrumps/Breadcrumbs';
import { Button } from '../components/button/Button';
import { Link, useNavigate } from 'react-router';

export const About = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/');
	};
	return (
		<div>
			<Breadcrumbs />
			About team hackathon
			<Button onClick={handleClick}>Back</Button>
			<Link to="/about/third">Third</Link>
			<br />
		</div>
	);
};
