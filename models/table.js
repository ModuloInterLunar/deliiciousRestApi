const mongoose = require('mongoose');

const opts = { 
    toJSON: { virtuals: true }
};

const tableSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    posX: { type: Number, required: true },
    posY: { type: Number, required: true },
    width: {type: Number, required: true},
    height: {type: Number, required: true}
}, opts);

tableSchema.virtual('id').get(() => this._id);

module.exports = mongoose.model('Table', tableSchema);