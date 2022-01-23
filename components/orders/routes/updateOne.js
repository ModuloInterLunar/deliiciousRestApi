const updateOne = async (req, res) => {
    
    if (req.body.ticket) res.order.ticket = req.body.ticket;
    if (req.body.employee) res.order.employee = req.body.employee;
    if (req.body.dish) res.order.dish = req.body.dish;
    if (req.body.hasBeenCoocked) res.order.hasBeenCoocked = req.body.hasBeenCoocked;
    if (req.body.hasBeenServed) res.order.hasBeenServed = req.body.hasBeenServed;
    if (req.body.isIncluded) res.order.isIncluded = req.body.isIncluded;
    if (req.body.description) res.order.description = req.body.description;

    try {
        const updatedOrder = await res.order.save();
        res.json(updatedOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = updateOne;