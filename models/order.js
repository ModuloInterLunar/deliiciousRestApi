const mongoose = require('mongoose');

const opts = { 
    toJSON: { virtuals: true },
    timestamps: true
};

const orderSchema = new mongoose.Schema({
    _id: { type: String, required: 'Id is required!' },
    ticket: { type: String, required: 'Ticket is required!' },
    dish: { type: String, required: 'Dish is required!' },
    hasBeenCoocked: { type: Boolean, required: 'HasBeenCoocked is required!' },
    hasBeenServed: { type: Boolean, required: 'HasBeenServed is required!' },
    isIncluded: { type: Boolean, required: 'IsIncluded is required!' },
    description: { type: String },
    employee: { type: String, required: 'Employee is required!' }
}, opts);

orderSchema.virtual('id').get(() => this._id);

module.exports = mongoose.model('Order', orderSchema);