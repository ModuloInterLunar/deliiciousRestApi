const express = require('express');
const router = express.Router();

const getMenu = require('./middlewares/getMenu');
const getMenuPopulated = require('./middlewares/getMenuPopulated');

const getAll = require('./routes/getAll');
const getOne = require('./routes/getOne');
const createOne = require('./routes/createOne');
const updateOne = require('./routes/updateOne');
const deleteOne = require('./routes/deleteOne');


router.get('/', getAll);
router.get('/:id', getMenuPopulated, getOne);
router.post('/', createOne);
router.patch('/:id', getMenu, updateOne);
router.delete('/:id', getMenu, deleteOne);

module.exports = router;
