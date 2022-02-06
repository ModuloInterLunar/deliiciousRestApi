const Dish = require('../../../models/dish');
const populater = require('../settings/populater');
const {capitalize} = require('../../../utils');

const updateOne = async (req, res) => {
    if (req.body.name) res.dish.name = capitalize(req.body.name);
    if (req.body.type) res.dish.type = req.body.type;
    if (req.body.price) res.dish.price = req.body.price;
    if (req.body.ingredientQties) res.dish.ingredientQties = req.body.ingredientQties;
    if (req.body.description) res.dish.description = req.body.description;
    if (req.body.image) res.dish.image = req.body.image;
    try {
        const updatedDish = await res.dish.save();
        const updatedDishPopulated = await Dish.findById(updatedDish.id).populate(populater);
        res.json(updatedDishPopulated);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = updateOne;