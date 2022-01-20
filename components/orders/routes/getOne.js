const getOne = async (req, res) => {
    res.json(res.order);
};

module.exports = getOne;