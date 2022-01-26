const mongoose = require('mongoose');

const opts = { 
    toJSON: { virtuals: true }
};

const dishSchema = new mongoose.Schema({
    _id: { type: String, required: 'Id is required!' },
    name: { type: String, trim: true, required: 'Name is required!' },
    ingredients: { type: String, trim: true },
    quantity: { type: Number },
    type: { type: String, enum: { values: ['Food', 'Drink'], message: '{VALUE} is not supported' }, required: 'Type is required!' },
    quantity: { type: Number },
    ingredients: { type: Map, of: Number },
    price: { type: Number, required: 'Width is required!' },
    description: { type: String, trim: true },
    image: { type: String }
}, opts);

dishSchema.virtual('id').get(() => this._id);

module.exports = mongoose.model('Dish', dishSchema);