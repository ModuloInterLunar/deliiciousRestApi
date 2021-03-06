const Order = require('../../../models/order');
const populater = require('../settings/populater');

const updateOne = async (req, res) => {
    
    if (req.body.ticket) res.order.ticket = req.body.ticket;
    if (req.body.employee) res.order.employee = req.body.employee;
    if (req.body.dish) res.order.dish = req.body.dish;
    if (req.body.table) res.order.table = req.body.table;
    if (req.body.hasBeenCooked) res.order.hasBeenCooked = req.body.hasBeenCooked;
    if (req.body.hasBeenServed) res.order.hasBeenServed = req.body.hasBeenServed;
    if (req.body.isIncluded) res.order.isIncluded = req.body.isIncluded;
    if (req.body.description) res.order.description = req.body.description;
    if (req.body.image) res.order.image = req.body.image;
    
    try {
        const updatedOrder = await res.order.save();
        const updatedOrderPopulated = await Order.findById(updatedOrder.id).populate(populater);
        res.json(updatedOrderPopulated);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = updateOne;