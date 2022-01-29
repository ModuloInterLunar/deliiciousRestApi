const Dish = require('../../../models/dish');
const populater = require('../settings/populater');

const getDish = async (req, res, next) => {
    let dish;
    try {
        dish = await Dish.findById(req.params.id).populate(populater);
        if (!dish) {
            return res.status(404).json({ message: 'Cannot find dish'});
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.dish = dish;
    next();
}

module.exports = getDish;