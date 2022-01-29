const Menu = require('../../../models/menu');
const populater = require('../settings/populater');

const getMenu = async (req, res, next) => {
    let menu;
    try {
        menu = await Menu.findById(req.params.id).populate(populater);
        if (!menu) {
            return res.status(404).json({ message: 'Cannot find menu'});
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.menu = menu;
    next();
}

module.exports = getMenu;