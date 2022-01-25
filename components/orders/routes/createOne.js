const Order = require('../../../models/order');
const Ticket = require('../../../models/ticket');
const Employee = require('../../../models/employee');
const services = require('../../../mongoose/services');

const createOne = async (req, res) => {
    if (!req.body.id) req.body.id = await services.generateId(Order);

    const order = new Order({
        _id: req.body.id,
        ticket: req.body.ticket,
        dish: req.body.dish,
        employee: req.body.employee,
        table: req.body.table,
        hasBeenCoocked: req.body.hasBeenCoocked,
        hasBeenServed: req.body.hasBeenServed,
        isIncluded: req.body.isIncluded,
        description: req.body.description,
        image: req.body.image
    });

    try {
        const newOrder = await order.save();
        res.status(201).json(newOrder);
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ message: err.message});
    }
}

module.exports = createOne;