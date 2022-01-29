const populater = {
    path: "actualTicket",
    model: "Ticket",
    populate: {
        path: "orders",
        model: "Order",
        populate: [{
            path: 'dish',
            model: 'Dish',  
            populate: {
                path: 'ingredientQties.ingredient',
                model: 'Ingredient'
            }
        },
        {
            path: "employee",
            model: "Employee",
            select: "-password -username",
        }]
    }
};

module.exports = populater;