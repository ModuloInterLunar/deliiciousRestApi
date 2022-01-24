const Order = require('../../../models/order');

const getAll = async (req, res) => {
    try {
        const orders = await Order.find().populate('employee');
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
}

module.exports = getAll;