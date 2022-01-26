const Table = require('../../../models/table');

const getAll = async (req, res) => {
    try {
        const tables = await Table.find().populate({
            path: "actualTicket",
            model: "Ticket",
            populate: {
                path: "orders",
                model: "Order",
                populate: {
                    path: "employee",
                    mode: "Employee"
                }
            }
        });
        res.json(tables);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
}

module.exports = getAll;