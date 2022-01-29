const populater = {
    path: 'dishes',
    model: 'Dish',
    populate: {
        path: 'ingredientQties.ingredient',
        model: 'Ingredient'
    }
};

module.exports = populater;