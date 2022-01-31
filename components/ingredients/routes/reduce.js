const updateOne = async (req, res) => {
    if (!req.body.quantity) {
        res.status(400).json({ message: "missing quantity" });
        return;
    }
    if (res.ingredient.quantity - req.body.quantity < 0){
        res.status(400).json({ message: `not enough '${res.ingredient.name}' in stock` });
        return;
    }    

    res.ingredient.quantity -= req.body.quantity;
    try {
        const updatedIngredient = await res.ingredient.save();
        res.json(updatedIngredient);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = updateOne;