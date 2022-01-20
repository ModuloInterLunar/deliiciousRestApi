const getOne = async (req, res) => {
    res.json(res.ticket);
};

module.exports = getOne;