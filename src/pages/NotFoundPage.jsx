import { useNavigate } from 'react-router';
import { Button } from '../components';

export const NotFoundPage = () => {
	const navigate = useNavigate();

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-100">
			<h1 className="text-4xl font-bold">404 - Страница не найдена</h1>
			<p className="text-1xl pb-6 pt-6">
				К сожалению, запрашиваемая страница не существует.
			</p>
			<Button onClick={() => navigate('/')} variant={'rounded'} color={'blue'}>
				На главную
			</Button>
		</div>
	);
};
