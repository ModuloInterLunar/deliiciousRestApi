const Ticket = require('../../../models/ticket');
const services = require('../../../mongoose/services');

const createOne = async (req, res) => {
    if (!req.body.id) req.body.id = await services.generateId(Ticket);
    const ticket = new Ticket({
        _id: req.body.id,
        total: req.body.total,
        text: req.body.text,
        isPaid: req.body.isPaid
    });

    try {
        const newTicket = await ticket.save();
        res.status(201).json(newTicket);
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ message: err.message});
    }
}

module.exports = createOne;