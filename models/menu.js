const mongoose = require('mongoose');

const opts = { 
    toJSON: { virtuals: true }
};

const menuSchema = new mongoose.Schema({
    _id: { type: String, required: 'Id is required!' },
    price: { type: Float, required: 'Price is required!' },
    dishes: { type: String, required: 'Dishes is required!' },
    
}, opts);

menuSchema.virtual('id').get(() => this._id);

module.exports = mongoose.model('Menu', menuSchema);