export const order = (data) => {
	return {
		type: 'ORDER',
		payload: data,
	};
};
export const deleteItem = (data) => {
	return {
		type: 'DELETE',
		payload: data,
	};
};
