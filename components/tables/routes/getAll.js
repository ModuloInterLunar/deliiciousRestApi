const Table = require('../../../models/table');
const populater = require('../settings/populater');

const getAll = async (req, res) => {
    try {
        const tables = await Table.find().populate(populater);
        res.json(tables);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
}

module.exports = getAll;