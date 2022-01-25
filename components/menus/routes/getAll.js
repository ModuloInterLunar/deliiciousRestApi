const Menu = require('../../../models/menu');

const getAll = async (req, res) => {
    try {
        const menus = await Menu.find();
        res.json(menus);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
}

module.exports = getAll;