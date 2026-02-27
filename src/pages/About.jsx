import { Button } from '../components/button/Button';
import { useNavigate } from 'react-router';

export const About = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/');
	};
	return (
		<div>
			About team hackathon
			<Button onClick={handleClick}>Back</Button>
		</div>
	);
};
