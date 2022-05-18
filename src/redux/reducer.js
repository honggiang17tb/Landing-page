const initState = {
    order: {
        id: 1,
        title: 'Rainbow Vegetable Sandwich',
        src: 'http://demo.tutsflow.com/foodera/images/foods/01.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, possimus.',
        type: 'vegetarian',
        price: '18.99 RON',
        old_price:'20.99 RON',
    },
    foods: [
        {
            id: 1,
            title: 'Rainbow Vegetable Sandwich',
            src: 'http://demo.tutsflow.com/foodera/images/foods/01.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, possimus.',
            type: 'vegetarian',
            price: '18.99 RON',
            old_price:'20.99 RON',
            status:'old',
        },
        {
            id: 2,
            title: 'Vegetarian Burger',
            src: 'http://demo.tutsflow.com/foodera/images/foods/02.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, possimus.',
            type: 'gluten free',
            price: '20.99 RON',
            old_price:'22.99 RON',
            status:'old',

        },
        {
            id: 3,
            title: 'Raspberry Stuffed French Toast',
            src: 'http://demo.tutsflow.com/foodera/images/foods/03.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, possimus.',
            type: 'sugar free',
            price: '22.99 RON',
            old_price:'24.99 RON',
            status:'new',

        },
        {
            id: 4,
            title: 'Salmon and tagliatelle',
            src: 'http://dhtheme.com/organicfood-html/images/elements/salmon.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, possimus.',
            type: 'drinks',
            price: '24.99 RON',
            old_price:'26.99 RON',
            status:'new',

        },
    ]
};

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "ORDER":
            return { ...state, order: action.payload }
        default:
            return state;
    }
};

export default rootReducer;
