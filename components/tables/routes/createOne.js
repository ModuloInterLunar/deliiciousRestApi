const Table = require('../../../models/table');
const services = require('../../../mongoose/services');
const populater = require('../settings/populater');

const createOne = async (req, res) => {
    if (!req.body.id) req.body.id = await services.generateId(Table);
    const table = new Table({
        _id: req.body.id,
        posX: req.body.posX,
        posY: req.body.posY,
        width: req.body.width,
        height: req.body.height,
        actualTicket: req.body.actualTicket ? req.body.actualTicket : undefined
    });

    try {
        const newTable = await table.save();
        const newTablePopulated = await Table.findById(newTable.id).populate(populater);
        res.status(201).json(newTablePopulated);
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ message: err.message});
    }
}

module.exports = createOne;