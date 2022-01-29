const express = require('express');
const router = express.Router();

const getTable = require('./middlewares/getTable');
const getTablePopulated = require('./middlewares/getTablePopulated');
const checkRelations = require('./middlewares/checkRelations');

const getAll = require('./routes/getAll');
const getOne = require('./routes/getOne');
const createOne = require('./routes/createOne');
const updateOne = require('./routes/updateOne');
const deleteOne = require('./routes/deleteOne');


router.get('/', getAll);
router.get('/:id', getTablePopulated, getOne);
router.post('/', checkRelations, createOne);
router.patch('/:id', getTable, checkRelations, updateOne);
router.delete('/:id', getTable, deleteOne);

module.exports = router;
