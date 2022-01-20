const Ingredient = require('../../../models/ingredient');

const getIngredient = async (req, res, next) => {
    let ingredient;
    try {
        ingredient = await Ingredient.findById(req.params.id);
        if (!ingredient) {
            return res.status(404).json({ message: 'Cannot find ingredient.'});
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.ingredient = ingredient;
    next();
}

module.exports = getIngredient;