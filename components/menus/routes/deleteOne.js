const deleteOne = async (req, res) => {
    try {
        await res.menu.remove();
        res.json({ message: 'Deleted Menu'});
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
}

module.exports = deleteOne;