const express = require('express');
const router = express.Router();

const getOrder = require('./middlewares/getOrder');

const getAll = require('./routes/getAll');
const getOne = require('./routes/getOne');
const createOne = require('./routes/createOne');
const updateOne = require('./routes/updateOne');
const deleteOne = require('./routes/deleteOne');


router.get('/', getAll);
router.get('/:id', getOrder, getOne);
router.post('/', createOne);
router.patch('/:id', getOrder, updateOne);
router.delete('/:id', getOrder, deleteOne);

module.exports = router;
