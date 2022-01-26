const mongoose = require('mongoose');

const opts = { 
    toJSON: { virtuals: true }
};

const tableSchema = new mongoose.Schema({
    _id: { type: String, required: 'Id is required!' },
    posX: { type: Number, required: 'PosX is required!' },
    posY: { type: Number, required: 'PosY is required!' },
    width: { type: Number, required: 'Width is required!' },
    height: { type: Number, required: 'Height is required!' },
    actualTicket: { type: String, ref: 'Ticket', unique: true, sparse: true }
}, opts);

tableSchema.virtual('id').get(() => this._id);

module.exports = mongoose.model('Table', tableSchema);