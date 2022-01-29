const Menu = require('../../../models/menu');
const populater = require('../settings/populater');

const getAll = async (req, res) => {
    try {
        const menus = await Menu.find().populate(populater);
        res.json(menus);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
}

module.exports = getAll;