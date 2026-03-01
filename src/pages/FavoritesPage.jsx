import { useEffect, useState } from 'react';
import { Breadcrumbs, Button } from '../components';

export const FavoritesPage = () => {
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
		setFavorites(storedFavorites);
	}, []);

	const removeFavorite = (id) => {
		const updatedFavorites = favorites.filter((fav) => fav.id !== id);

		localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
		setFavorites(updatedFavorites);
	};

	return (
		<>
			<div className="block p-6">
				<Breadcrumbs />
			</div>
			<div className="m-8">
				{favorites.length === 0 ? (
					<p>No favorites</p>
				) : (
					favorites.map((member) => (
						<div key={member.id} className="member-card">
							<h2>{member.name}</h2>
							<Button
								onClick={() => removeFavorite(member.id)}
								color={'red'}
							>
								Delete
							</Button>
						</div>
					))
				)}
			</div>
		</>
	);
};
