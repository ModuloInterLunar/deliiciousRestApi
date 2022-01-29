const populater = {
    path: 'orders',
    model: 'Order',
    populate: {
        path: 'dish',
        model: 'Dish',
        populate: {
            path: 'ingredientQties.ingredient',
            model: 'Ingredient'
        }
    }
};

module.exports = populater;