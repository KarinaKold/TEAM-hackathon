import { Breadcrumbs, Button } from '../components';
import { useFavorites } from '../hooks/useFavorites';

export const FavoritesPage = () => {
	const { favorites, removeFavorite } = useFavorites();

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
