const {capitalize} = require('../../../utils');

const updateOne = async (req, res) => {
    if (req.body._id) res.ingredient._id = req.body.id;
    if (req.body.name) res.ingredient.name = capitalize(req.body.name);
    if (req.body.quantity) res.ingredient.quantity = req.body.quantity;
    if (req.body.measure) res.ingredient.measure = req.body.measure;
    try {
        const updatedIngredient = await res.ingredient.save();
        res.json(updatedIngredient);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = updateOne;