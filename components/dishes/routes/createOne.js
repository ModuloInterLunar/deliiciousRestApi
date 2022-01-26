const Dish = require('../../../models/dish');
const services = require('../../../mongoose/services');
var mongoose = require('mongoose');

const createOne = async (req, res) => {
    if (!req.body.id) req.body.id = await services.generateId(Dish);
    const dish = await new Dish({
        _id: req.body.id,
        name: req.body.name,
        ingredients: req.body.ingredients,
        type: req.body.type,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image
    });

    try {
        const newDish = await dish.save();
        res.status(201).json(newDish);
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ message: err.message });
    }
}

module.exports = createOne;