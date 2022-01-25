const Ticket = require('../../../models/ticket');

const checkRelations = async (req, res, next) => {
    const ticketId = req.body.actualTicket;

    if(ticketId && !await Ticket.findById(ticketId))
        return res.status(404).json({ message: `Ticket with id [${ticketId}] not found.`});

    next();
}

module.exports = checkRelations;