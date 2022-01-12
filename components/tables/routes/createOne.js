const Table = require('../../../models/table');
const services = require('../../../mongoose/services');

const createOne = async (req, res) => {
    if (!req.body.id) req.body.id = await services.generateId(Table);
    const table = new Table({
        _id: req.body.id,
        posX: req.body.posX,
        posY: req.body.posY,
        width: req.body.width,
        height: req.body.height
    });

    try {
        const newTable = await table.save();
        res.status(201).json(newTable);
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ message: err.message});
    }
}

module.exports = createOne;