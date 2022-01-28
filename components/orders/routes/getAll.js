const Order = require('../../../models/order');

const getAll = async (req, res) => {
    try {
        const orders = await Order.find().populate('employee', '-password')
        .populate({
            path: 'dish',
            model: 'Dish',
            populate: {
                path: 'ingredientQties.ingredient',
                model: 'Ingredient'
            }
        });
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
}

module.exports = getAll;