const deleteOne = async (req, res) => {
    try {
        await res.dish.remove();
        res.json({ message: 'Deleted Dish'});
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
}

module.exports = deleteOne;