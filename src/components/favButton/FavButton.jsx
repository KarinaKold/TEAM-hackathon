import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Button } from '../button/Button';
import { useFavorites } from '../../hooks';
import { getFromStorage } from '../../utils';

export const FavButton = ({ member }) => {
	const [isFavorite, setIsFavorite] = useState(false);
	const { addFavorite, removeFavorite } = useFavorites();

	useEffect(() => {
		const favorites = getFromStorage('favorites');
		setIsFavorite(favorites.some((fav) => fav.id === member.id));
	}, [member.id]);

	const toggleFavorite = () => {
		if (isFavorite) {
			removeFavorite(member.id);
			setIsFavorite(false);
		} else {
			addFavorite(member);
			setIsFavorite(true);
		}
	};

	return (
		<div className="flex justify-center pl-86">
			<Button onClick={toggleFavorite} color={isFavorite ? 'blue' : 'gray'}>
				{isFavorite ? 'From favorites' : 'To favorites'}
			</Button>
		</div>
	);
};

FavButton.propTypes = {
	member: PropTypes.object.isRequired,
};
