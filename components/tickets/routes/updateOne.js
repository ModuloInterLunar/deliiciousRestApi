const updateOne = async (req, res) => {
    if (req.body.total) res.ticket.total = req.body.total;
    if (req.body.text) res.ticket.text = req.body.text;
    if (req.body.isPaid) res.ticket.isPaid = req.body.isPaid;
    try {
        const updatedTicket = await res.ticket.save();
        res.json(updatedTicket);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = updateOne;