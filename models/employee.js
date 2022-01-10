const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    username: { type: String, required: true},
    dni: {type: String, required: true},
    name: { type: String, required: true },
    surname: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true }
});

module.exports = mongoose.model('Employee', employeeSchema);