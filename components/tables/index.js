const express = require('express');
const router = express.Router();

const getTable = require('./middlewares/getTable');

const getAll = require('./routes/getAll');
const getOne = require('./routes/getOne');
const createOne = require('./routes/createOne');
const updateOne = require('./routes/updateOne');
const deleteOne = require('./routes/deleteOne');


router.get('/', getAll);
router.get('/:id', getTable, getOne);
router.post('/', createOne);
router.patch('/:id', getTable, updateOne);
router.delete('/:id', getTable, deleteOne);



module.exports = router;
