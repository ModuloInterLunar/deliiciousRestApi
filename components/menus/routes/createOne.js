const Menu = require('../../../models/menu');
const services = require('../../../mongoose/services');

const createOne = async (req, res) => {
    if (!req.body.id) req.body.id = await services.generateId(Menu);
    const menu = new Menu({
        _id: req.body.id,
        price: req.body.price,
        dishes: req.body.dishes
    });

    try {
        const newMenu = await menu.save();
        res.status(201).json(newMenu);
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ message: err.message});
    }
}

module.exports = createOne;