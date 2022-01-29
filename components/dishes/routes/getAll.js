const Dish = require('../../../models/dish');
const populater = require('../settings/populater');

const getAll = async (req, res) => {
    try {
        const dishes = await Dish.find().populate(populater);
        res.json(dishes);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
}

module.exports = getAll;