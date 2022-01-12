const deleteOne = async (req, res) => {
    try {
        await res.table.remove();
        res.json({ message: 'Deleted Table'});
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
}

module.exports = deleteOne;