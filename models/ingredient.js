const mongoose = require('mongoose');

const opts = {
    toJSON: { virtuals: true }
};

const ingredientSchema = new mongoose.Schema({
    _id: { type: String, required: 'Id is required!' },
    name: { type: String, trim: true, required: 'Name is required!', unique: true },
    quantity: { type: Number, required: 'Quantity is required!' },
    measure: { type: String, trim: true, default: 'uds.'}
}, opts);
ingredientSchema.virtual('id').get(() => this._id);


module.exports = mongoose.model('Ingredient', ingredientSchema);