const Table = require('../../../models/table');
const populater = require('../settings/populater');

const updateOne = async (req, res) => {
    if (req.body.posX) res.table.posX = req.body.posX;
    if (req.body.posY) res.table.posY = req.body.posY;
    if (req.body.width) res.table.width = req.body.width;
    if (req.body.height) res.table.height = req.body.height;
    res.table.actualTicket = req.body.actualTicket ? req.body.actualTicket : undefined; // no pongo el if aquí, porque sino, no se vacía el campo al poner actualTicket = null
    
    try {
        const updatedTable = await res.table.save();
        const updatedTablePopulated = await Table.findById(updatedTable.id).populate(populater);
        res.json(updatedTablePopulated);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = updateOne;