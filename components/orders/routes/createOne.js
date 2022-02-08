const Order = require('../../../models/order');
const services = require('../../../mongoose/services');
const populater = require('../settings/populater');

const createOne = async (req, res) => {
    if (!req.body.id) req.body.id = await services.generateId(Order);

    const order = new Order({
        _id: req.body.id,
        ticket: req.body.ticket,
        dish: req.body.dish,
        employee: req.body.employee,
        table: req.body.table,
        hasBeenCooked: req.body.hasBeenCooked,
        hasBeenServed: req.body.hasBeenServed,
        isIncluded: req.body.isIncluded,
        description: req.body.description,
        image: req.body.image
    });

    try {
        const newOrder = await order.save();
        const newOrderPopulated = await Order.findById(newOrder.id).populate(populater);
        res.status(201).json(newOrderPopulated);
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ message: err.message});
    }
}

module.exports = createOne;