const populater = {
    path: 'orders',
    model: 'Order',
    populate: [{
        path: 'dish',
        model: 'Dish',
        populate: {
            path: 'ingredientQties.ingredient',
            model: 'Ingredient'
        }
    },{
        path: 'employee',
        model: 'Employee'
    }]
}
;

module.exports = populater;