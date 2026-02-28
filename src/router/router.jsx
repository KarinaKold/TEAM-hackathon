import { createBrowserRouter } from 'react-router';
import { FavoritesPage, HomePage, NotFoundPage } from '../pages';
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
		element: <NotFoundPage />,
	},
]);
