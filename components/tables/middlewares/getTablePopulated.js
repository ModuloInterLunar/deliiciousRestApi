const Table = require('../../../models/table');
const populater = require('../settings/populater');

const getTable = async (req, res, next) => {
    let table;
    try {
        table = await Table.findById(req.params.id).populate(populater);
        if (!table) {
            return res.status(404).json({ message: 'Cannot find table'});
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.table = table;
    next();
}

module.exports = getTable;