const express = require('express')
const router = express.Router();
const Table = require('../models/table');

// Get all
router.get('/', async (req, res) => {
    try {
        const tables = await Table.find();
        res.json(tables);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
});

// Get One
router.get('/:id', getTable, async (req, res) => {
    res.json(res.table);
});

// Create One
router.post('/', async (req, res) => {
    const table = new Table({
        _id: req.body._id,
        posX: req.body.posX,
        posY: req.body.posY,
        width: req.body.width,
        height: req.body.height
    });

    try {
        const newTable = await table.save();
        res.status(201).json(newTable);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
});

// Updating One
router.patch('/:id', getTable, async (req, res) => {
    if (req.body._id) res.table._id = req.body._id;
    if (req.body.posX) res.table.posX = req.body.posX;
    if (req.body.posY) res.table.posY = req.body.posY;
    if(req.body.width) res.table.width = req.body.width;
    if(req.body.height) res.table.height = req.body.height;

    try {
        const updatedTable = await res.table.save();
        res.json(updatedTable);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Deleting One
router.delete('/:id', getTable, async (req, res) => {
    try {
        await res.table.remove();
        res.json({ message: 'Deleted Table'});
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
});

async function getTable(req, res, next) {
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


module.exports = router;
