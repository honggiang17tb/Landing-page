const initState = {
	last_order: {
		id: 1,
		title: 'Rainbow Vegetable Sandwich',
		src: 'http://demo.tutsflow.com/foodera/images/foods/01.jpg',
		description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, possimus.',
		type: 'vegetarian',
		price: 18.99,
		old_price: 20.99,
		status: 'old',
		unit: 'RON',
	},
	order: [],
	foods: [
		{
			id: 1,
			title: 'Rainbow Vegetable Sandwich',
			src: 'http://demo.tutsflow.com/foodera/images/foods/01.jpg',
			description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, possimus.',
			type: 'vegetarian',
			price: 18.99,
			old_price: 20.99,
			status: 'old',
			unit: 'RON',
		},
		{
			id: 2,
			title: 'Vegetarian Burger',
			src: 'http://demo.tutsflow.com/foodera/images/foods/02.jpg',
			description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, possimus.',
			type: 'gluten free',
			price: 20.99,
			old_price: 22.99,
			status: 'old',
			unit: 'RON',
		},
		{
			id: 3,
			title: 'Raspberry Stuffed French Toast',
			src: 'http://demo.tutsflow.com/foodera/images/foods/03.jpg',
			description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, possimus.',
			type: 'sugar free',
			price: 22.99,
			old_price: 24.99,
			unit: 'RON',
			status: 'new',
		},
		{
			id: 4,
			title: 'Salmon and tagliatelle',
			src: 'http://dhtheme.com/organicfood-html/images/elements/salmon.jpg',
			description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, possimus.',
			type: 'drinks',
			price: 24.99,
			old_price: 26.99,
			status: 'new',
			unit: 'RON',
		},
	],
};

const isExist = (data, id) => {
	const isExist = data.some((x) => x.id === id);
	return isExist;
};

const rootReducer = (state = initState, action) => {
	switch (action.type) {
		case 'ORDER':
			let data = [];
			const prev = state.order;
			const id = action.payload.id;
			if (isExist(prev, id)) {
				const index = prev.findIndex((x) => x.id === id);
				prev[index].quantity += action.payload.quantity;
				data = [...prev];
			} else {
				data = [...prev, action.payload];
			}
			return { ...state, order: data, last_order: action.payload };
		case 'DELETE':
			return { ...state, order: action.payload };
		default:
			return state;
	}
};

export default rootReducer;
