const Ingredient = require('../../../models/ingredient');

const getAll =  async (req, res) => {
    try {
        const ingredients = await Ingredient.find();
        res.json(ingredients);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
};

module.exports = getAll;