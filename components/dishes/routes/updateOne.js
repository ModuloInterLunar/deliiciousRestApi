
const updateOne = async (req, res) => {
    if (req.body.name) res.dish.name = req.body.name;
    if (req.body.ingredients) res.dish.ingredients = req.body.ingredients;
    if (req.body.quantity) res.dish.quantity = req.body.quantity;
    if (req.body.type) res.dish.type = req.body.type;
    if (req.body.price) res.dish.price = req.body.price;
    if (req.body.description) res.dish.description = req.body.description;
    if (req.body.image) res.dish.image = req.body.image;
    try {
        const updatedDish = await res.dish.save();
        res.json(updatedDish);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = updateOne;