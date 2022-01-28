const Ticket = require('../../../models/ticket');

const getAll = async (req, res) => {
    try {
        const tickets = await Ticket.find().populate({
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
        });
        res.json(tickets);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
}

module.exports = getAll;