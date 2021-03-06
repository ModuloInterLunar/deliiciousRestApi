const express = require('express');
const router = express.Router();

const getOrder = require('./middlewares/getOrder');
const getOrderPopulated = require('./middlewares/getOrderPopulated');
const checkRelations = require('./middlewares/checkRelations');

const getAll = require('./routes/getAll');
const getAllNotServed = require('./routes/getAllNotServed');
const getAllCookedNotServed = require('./routes/getAllCookedNotServed');
const getOne = require('./routes/getOne');
const createOne = require('./routes/createOne');
const updateOne = require('./routes/updateOne');
const deleteOne = require('./routes/deleteOne');

router.get('/cookednotserved', getAllCookedNotServed);
router.get('/notserved', getAllNotServed);
router.get('/', getAll);
router.get('/:id', getOrderPopulated, getOne);
router.post('/', checkRelations, createOne);
router.patch('/:id', getOrder, checkRelations, updateOne);
router.delete('/:id', getOrder, deleteOne);

module.exports = router;
