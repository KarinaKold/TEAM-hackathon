export const getFromStorage = (storedItem) => {
	return JSON.parse(localStorage.getItem(storedItem)) || [];
};
