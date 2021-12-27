const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    posX: { type: "Decimal128", required: true },
    posY: { type: "Decimal128", required: true },
    width: {type: "Decimal128", required: true},
    height: {type: "Decimal128", required: true}
});

module.exports = mongoose.model('Table', tableSchema);