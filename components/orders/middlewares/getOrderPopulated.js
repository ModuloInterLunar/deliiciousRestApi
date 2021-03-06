const Order = require('../../../models/order');
const populater = require('../settings/populater');

const getOrder = async (req, res, next) => {
    let order;
    try {
        order = await Order.findById(req.params.id).populate(populater);            
        if (!order) {
            return res.status(404).json({ message: 'Cannot find order'});
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.order = order;
    next();
}

module.exports = getOrder;