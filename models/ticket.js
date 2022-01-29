const mongoose = require('mongoose');

const opts = {
    toJSON: { virtuals: true },
    timestamps: true
};

const ticketSchema = new mongoose.Schema({
    _id: { type: String, required: 'Id is required!' },
    total: { type: Number, default: 0.0 },
    text: { type: String, trim: true, default: "" },
    isPaid: { type: Boolean, default: false },
    orders: [{ type: String, ref: 'Order' }]
}, opts);

ticketSchema.virtual('id').get(() => this._id);

module.exports = mongoose.model('Ticket', ticketSchema);
