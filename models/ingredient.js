const mongoose = require('mongoose');

const opts = { 
    toJSON: { virtuals: true }
};

const ingredientSchema = new mongoose.Schema({
    _id: { type: String, required: 'Id is required!' },
    name: { type: String, required: 'Name is required!', unique: 'Name already in use!'},
    price: { type: Number, required: 'Price is required!' },
    quantity: { type: Number, required: 'Quantity is required!' }
}, opts);
ingredientSchema.virtual('id').get(() => this._id);


module.exports = mongoose.model('Ingredients', ingredientSchema);