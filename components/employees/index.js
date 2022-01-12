const express = require('express');
const router = express.Router();

const getEmployee = require('./middlewares/getEmployee');
const isStrongPassword = require('./middlewares/isStrongPassword');

const getAll = require('./routes/getAll');
const getOne = require('./routes/getOne');
const createOne = require('./routes/createOne');
const updateOne = require('./routes/updateOne');
const deleteOne = require('./routes/deleteOne');

router.get('/', getAll);
router.get('/:id', getEmployee, getOne);
router.post('/', isStrongPassword, createOne);
router.patch('/:id', getEmployee, updateOne);
router.delete('/:id', getEmployee, deleteOne);


module.exports = router;