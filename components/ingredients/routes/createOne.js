const Ingredient = require('../../../models/ingredient');
const services = require('../../../mongoose/services');
const {capitalize} = require('../../../utils');

const createOne = async (req, res) => {
    if (!req.body.id) req.body.id = await services.generateId(Ingredient);

    const ingredient = await new Ingredient({
        _id: req.body.id,
        name: capitalize(req.body.name),
        quantity: req.body.quantity,
        measure: req.body.measure
    });

    try {
        const newIngredient = await ingredient.save();
        res.status(201).json(newIngredient);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
};

module.exports = createOne;