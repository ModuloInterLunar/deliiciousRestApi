const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true, unique: true},
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
});

module.exports = mongoose.model('Ingredients', ingredientSchema);