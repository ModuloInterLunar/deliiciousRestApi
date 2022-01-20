const Ticket = require('../../../models/ticket');

const getAll = async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.json(tickets);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
}

module.exports = getAll;