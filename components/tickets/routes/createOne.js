const Ticket = require('../../../models/ticket');
const services = require('../../../mongoose/services');
const populater = require('../settings/populater');

const createOne = async (req, res) => {
    if (!req.body.id) req.body.id = await services.generateId(Ticket);
    const ticket = new Ticket({
        _id: req.body.id,
        total: req.body.total,
        text: req.body.text,
        isPaid: req.body.isPaid,
        orders: req.body.orders
    });

    try {
        const newTicket = await ticket.save();
        const newTicketPopulated = await Ticket.findById(newTicket.id).populate(populater);
        res.status(201).json(newTicketPopulated);
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ message: err.message});
    }
}

module.exports = createOne;