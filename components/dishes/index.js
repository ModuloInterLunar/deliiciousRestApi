const express = require('express');
const router = express.Router();

const getDish = require('./middlewares/getDish');
const getDishPopulated = require('./middlewares/getDishPopulated');

const getAll = require('./routes/getAll');
const getOne = require('./routes/getOne');
const createOne = require('./routes/createOne');
const updateOne = require('./routes/updateOne');
const deleteOne = require('./routes/deleteOne');


router.get('/', getAll);
router.get('/:id', getDishPopulated, getOne);
router.post('/', createOne);
router.patch('/:id', getDish, updateOne);
router.delete('/:id', getDish, deleteOne);

module.exports = router;
