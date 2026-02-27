import { createBrowserRouter } from 'react-router';
import { FavoritesPage, HomePage } from '../pages';
import { NotFound } from '../pages/NotFound';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		children: [
			{ path: '/favorites', element: <FavoritesPage /> },
			{ path: '/member/:id', element: <></> },
		],
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);
