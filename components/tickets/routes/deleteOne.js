const deleteOne = async (req, res) => {
    try {
        await res.ticket.remove();
        res.json({ message: 'Deleted ticket'});
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
}

module.exports = deleteOne;