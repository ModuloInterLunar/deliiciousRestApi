const populater = [{
    path: 'employee',
    select: '-password'
},
{
    path: 'dish',
    model: 'Dish',
    populate: {
        path: 'ingredientQties.ingredient',
        model: 'Ingredient'
    }
}];

module.exports = populater;