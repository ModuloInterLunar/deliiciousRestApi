const mongoose = require('mongoose');

const opts = {
    toJSON: { virtuals: true },
    timestamps: true
};

const orderSchema = new mongoose.Schema({
    _id: { type: String, required: 'Id is required!' },
    ticket: { type: String, ref: 'Ticket', required: 'Ticket is required!' }, // id of an existing and active ticket
    dish: { type: String, ref: 'Dish', required: 'Dish is required!' }, // id of an existing dish
    hasBeenCooked: { type: Boolean, default: false },
    hasBeenServed: { type: Boolean, default: false },
    isIncluded: { type: Boolean, required: 'IsIncluded is required!' },
    description: { type: String, trim: true },
    employee: { type: String, ref: 'Employee', required: 'Employee is required!' }, // id of an existing employee
    table: { type: String, required: 'Table id is required!' },
    image: { type: String }
}, opts);

orderSchema.virtual('id').get(() => this._id);

module.exports = mongoose.model('Order', orderSchema);