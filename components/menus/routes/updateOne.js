
const updateOne = async (req, res) => {
    if (req.body.price) res.menu.price = req.body.price;
    if (req.body.dishes) res.menu.dishes = req.body.dishes;
    if (req.body.image) res.menu.image = req.body.image;
    try {
        const updatedMenu = await res.menu.save();
        res.json(updatedMenu);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = updateOne;