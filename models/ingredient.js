const mongoose = require('mongoose');

const opts = { 
    toJSON: { virtuals: true }
};

const ingredientSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true, unique: true},
    price: { type: "Decimal128", required: true },
    quantity: { type: "Decimal128", required: true }
}, opts);

ingredientSchema.virtual('id').get(() => this._id);


module.exports = mongoose.model('Ingredients', ingredientSchema);