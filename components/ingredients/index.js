const express = require('express');
const router = express.Router();

const getIngredient = require('./middlewares/getIngredient');

const getAll = require('./routes/getAll');
const getOne = require('./routes/getOne');
const createOne = require('./routes/createOne');
const updateOne = require('./routes/updateOne');
const reduce = require('./routes/reduce');
const deleteOne = require('./routes/deleteOne');

router.get('/', getAll);
router.get('/:id', getIngredient, getOne);
router.post('/', createOne);
router.patch('/reduce/:id', getIngredient, reduce);
router.patch('/:id', getIngredient, updateOne);
router.delete('/:id', getIngredient, deleteOne);

module.exports = router;
