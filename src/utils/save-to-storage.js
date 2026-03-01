export const saveToStorage = (storedItem, item) => {
	localStorage.setItem(storedItem, JSON.stringify(item));
};
