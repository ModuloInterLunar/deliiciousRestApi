const mongoose = require('mongoose');

const opts = { 
    toJSON: { virtuals: true },
    timestamps: true
};

const orderSchema = new mongoose.Schema({
    _id: { type: String, required: 'Id is required!' },
    ticket: { type: String, required: 'Ticket is required!' }, // id of an existing and active ticket
    dish: { type: String, required: 'Dish is required!' }, // id of an existing dish
    hasBeenCoocked: { type: Boolean, required: 'HasBeenCoocked is required!' },
    hasBeenServed: { type: Boolean, required: 'HasBeenServed is required!' },
    isIncluded: { type: Boolean, required: 'IsIncluded is required!' },
    description: { type: String },
    employee: { type: String, ref: 'Employee', required: 'Employee is required!' } // id of an existing employee
}, opts);

orderSchema.virtual('id').get(() => this._id);

module.exports = mongoose.model('Order', orderSchema);