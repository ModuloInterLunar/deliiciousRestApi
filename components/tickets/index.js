const express = require('express');
const router = express.Router();

const getTicket = require('./middlewares/getTicket');
const getTicketPopulated = require('./middlewares/getTicketPopulated');

const getAll = require('./routes/getAll');
const getOne = require('./routes/getOne');
const createOne = require('./routes/createOne');
const updateOne = require('./routes/updateOne');
const deleteOne = require('./routes/deleteOne');

router.get('/', getAll);
router.get('/:id', getTicketPopulated, getOne);
router.post('/', createOne);
router.patch('/:id', getTicket, updateOne);
router.delete('/:id', getTicket, deleteOne);

module.exports = router;