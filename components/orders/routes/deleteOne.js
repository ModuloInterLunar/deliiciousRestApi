const deleteOne = async (req, res) => {
    try {
        await res.order.remove();
        res.json({ message: 'Deleted Order'});
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
}

module.exports = deleteOne;