import { useState, useEffect } from 'react';
import { getFromStorage, saveToStorage } from '../utils';

export const useFavorites = () => {
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		const storedFavorites = getFromStorage('favorites');
		setFavorites(storedFavorites);
	}, []);

	const addFavorite = (member) => {
		const updatedFavorites = [...favorites, member];
		saveToStorage('favorites', updatedFavorites);
		setFavorites(updatedFavorites);
	};

	const removeFavorite = (id) => {
		const updatedFavorites = favorites.filter((fav) => fav.id !== id);
		saveToStorage('favorites', updatedFavorites);
		setFavorites(updatedFavorites);
	};

	return { favorites, addFavorite, removeFavorite };
};
