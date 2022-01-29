const Dish = require('../../../models/dish');
const services = require('../../../mongoose/services');
const populater = require('../settings/populater');

const createOne = async (req, res) => {
    if (!req.body.id) req.body.id = await services.generateId(Dish);
    const dish = await new Dish({
        _id: req.body.id,
        name: req.body.name,
        ingredientQties: req.body.ingredientQties,
        type: req.body.type,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image
    });

    try {
        const newDish = await dish.save();
        const newDishPopulated = await Dish.findById(newDish.id).populate(populater);
        res.status(201).json(newDishPopulated);
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ message: err.message });
    }
}

module.exports = createOne;