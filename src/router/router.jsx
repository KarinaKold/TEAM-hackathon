import { createBrowserRouter } from 'react-router';
import { FavoritesPage, HomePage, MemberPage, NotFoundPage } from '../pages';
import { App } from '../App';

export const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <App />,
			children: [
				{ path: '/', element: <HomePage /> },
				{ path: '/favorites', element: <FavoritesPage /> },
				{ path: '/member/:id', element: <MemberPage /> },
			],
		},
		{
			path: '*',
			element: <NotFoundPage />,
		},
	],
	{ basename: process.env.NODE_ENV === 'production' ? '/TEAM-hackathon' : '/' },
);
