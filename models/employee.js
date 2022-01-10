const mongoose = require('mongoose');

const opts = { toJSON: { virtuals: true } };
const employeeSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    username: { type: String, required: true},
    dni: {type: String, required: true},
    name: { type: String, required: true },
    surname: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true }
}, opts);

// We use the virtual to assign and get the id to "_id"
employeeSchema.virtual('id').get(() => this._id)
                            .set(v => this._id = v);

module.exports = mongoose.model('Employee', employeeSchema);