const mongoose = require('mongoose');

const opts = {
    toJSON: { virtuals: true }
};

const dishSchema = new mongoose.Schema({
    _id: { type: String, required: 'Id is required!' },
    name: { type: String, trim: true, required: 'Name is required!' },
    type: { type: String, enum: { values: ['Food', 'Drink'], message: '{VALUE} is not supported' }, required: 'Type is required!' },
    ingredientQties: [{ ingredient: { type: String, ref: 'Ingredient' }, quantity: { type: Number } }],
    price: { type: Number, required: 'Width is required!' },
    description: { type: String, trim: true },
    image: { type: String }
}, opts);

dishSchema.virtual('id').get(() => this._id);

module.exports = mongoose.model('Dish', dishSchema);


