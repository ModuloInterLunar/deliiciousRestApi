const deleteOne = async (req, res) => {
    try {
        await res.ingredient.remove();
        res.json({ message: 'Deleted Ingredient'});
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
};

module.exports = deleteOne;