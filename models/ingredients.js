const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    _id: { type: String, required: true }, // name
    price: { type: "Decimal128", required: true },
    quantity: { type: "Decimal128", required: true }
});

module.exports = mongoose.model('Ingredients', ingredientSchema);