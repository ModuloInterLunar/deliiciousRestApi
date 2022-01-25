
const updateOne = async (req, res) => {
    if (req.body.posX) res.table.posX = req.body.posX;
    if (req.body.posY) res.table.posY = req.body.posY;
    if (req.body.width) res.table.width = req.body.width;
    if (req.body.height) res.table.height = req.body.height;
    if (req.body.actualTicket) res.table.actualTicket = req.body.actualTicket;
    
    try {
        const updatedTable = await res.table.save();
        res.json(updatedTable);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = updateOne;