const mongoose = require('mongoose');

const opts = { 
    toJSON: { virtuals: true }
};

const dishSchema = new mongoose.Schema({
    _id: { type: String, required: 'Id is required!' },
    name: { type: String, required: 'Name is required!' },
    ingredients: { type: String },
    quantity: { type: Number },
    type: { type: String, required: 'Type is required!' },
    price: { type: Number, required: 'Width is required!' },
    description: { type: String }
}, opts);

dishSchema.virtual('id').get(() => this._id);

module.exports = mongoose.model('Dish', dishSchema);