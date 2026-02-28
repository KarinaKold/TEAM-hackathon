import { createBrowserRouter } from 'react-router';
import { FavoritesPage, HomePage } from '../pages';
import { NotFound } from '../pages/NotFound';
import { App } from '../App';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: '/', element: <HomePage /> },
			{ path: '/favorites', element: <FavoritesPage /> },
			{ path: '/member/:id', element: <></> },
		],
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);
