const Ingredient = require('../../../models/ingredient');
const services = require('../../../mongoose/services');

const createOne = async (req, res) => {
    if (!req.body.id) req.body.id = await services.generateId(Ingredient);

    const ingredient = new Ingredient({
        _id: req.body.id,
        name: req.body.name,
        quantity: req.body.quantity,
        measure: req.body.measure,
        image: req.body.image
    });

    try {
        const newIngredient = await ingredient.save();
        res.status(201).json(newIngredient);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
};

module.exports = createOne;