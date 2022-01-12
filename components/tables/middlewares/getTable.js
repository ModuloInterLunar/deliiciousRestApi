const getTable = async (req, res, next) => {
    let table;
    try {
        table = await Table.findById(req.params.id);
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