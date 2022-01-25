const mongoose = require('mongoose');

const opts = { 
    toJSON: { virtuals: true }
};

const menuSchema = new mongoose.Schema({
    _id: { type: String, required: 'Id is required!' },
    price: { type: Number, required: 'Price is required!' },
    dishes: [{ type: String, ref: 'Dish', required: 'Dishes is required!' }],
    image: { type: String }
}, opts);

menuSchema.virtual('id').get(() => this._id);

module.exports = mongoose.model('Menu', menuSchema);