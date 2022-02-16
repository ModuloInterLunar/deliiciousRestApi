const Ticket = require('../../../models/ticket');
const populater = require('../settings/populater');

const getAllPaid = async (req, res) => {
    try {
        const tickets = await Ticket.find({isPaid: true}).populate(populater);
        res.json(tickets);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
}

module.exports = getAllPaid;