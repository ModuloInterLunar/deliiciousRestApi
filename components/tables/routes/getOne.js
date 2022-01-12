const getOne = async (req, res) => {
    res.json(res.table);
}

module.exports = getOne;