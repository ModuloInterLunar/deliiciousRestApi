const deleteOne = async (req, res) => {
    try {
        await res.employee.remove();
        res.json({ message: 'Deleted Employee'});
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
}

module.exports = deleteOne;