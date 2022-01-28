const Ticket = require('../../../models/ticket');

const getTicket = async (req, res, next) => {
    let ticket;
    try {
        ticket = await Ticket.findById(req.params.id).populate({
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
        if (!ticket) {
            return res.status(404).json({ message: 'Cannot find ticket'});
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.ticket = ticket;
    next();
}

module.exports = getTicket;