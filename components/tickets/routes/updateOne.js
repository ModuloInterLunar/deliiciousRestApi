const Ticket = require('../../../models/ticket');
const populater = require('../settings/populater');

const updateOne = async (req, res) => {
    if (req.body.total) res.ticket.total = req.body.total;
    if (req.body.text) res.ticket.text = req.body.text;
    if (req.body.isPaid) res.ticket.isPaid = req.body.isPaid;
    if (req.body.orders) res.ticket.orders = req.body.orders;

    try {
        const updatedTicket = await res.ticket.save();
        const updatedTicketPopulated = await Ticket.findById(updatedTicket.id).populate(populater);
        res.json(updatedTicketPopulated);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = updateOne;