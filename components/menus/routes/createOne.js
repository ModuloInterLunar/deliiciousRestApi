const Menu = require('../../../models/menu');
const services = require('../../../mongoose/services');
const populater = require('../settings/populater');

const createOne = async (req, res) => {
    if (!req.body.id) req.body.id = await services.generateId(Menu);
    const menu = new Menu({
        _id: req.body.id,
        price: req.body.price,
        dishes: req.body.dishes,
        image: req.body.image
    });

    try {
        const newMenu = await menu.save();
        const newMenuPopulated = await Menu.findById(newMenu.id).populate(populater);
        res.status(201).json(newMenuPopulated);
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ message: err.message});
    }
}

module.exports = createOne;