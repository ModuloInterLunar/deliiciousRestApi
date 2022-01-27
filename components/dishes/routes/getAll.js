const Dish = require('../../../models/dish');

const getAll = async (req, res) => {
    try {
        const dishes = await Dish.find().populate('ingredientQties.ingredient');
        res.json(dishes);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
}

module.exports = getAll;