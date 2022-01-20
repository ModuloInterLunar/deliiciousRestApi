const mongoose = require('mongoose');

const opts = { 
    toJSON: { virtuals: true },
    timestamps: true
};

const ticketSchema = new mongoose.Schema({
    _id: { type: String, required: 'Id is required!' },
    total: {type: Number, required: 'Total is required!'},
    text: {type: String, required: 'Text is required!'},
    isPaid: {type: Boolean, required: 'IsPaid is required!'}
}, opts);

ticketSchema.virtual('id').get(() => this._id);

module.exports = mongoose.model('ticket', ticketSchema);