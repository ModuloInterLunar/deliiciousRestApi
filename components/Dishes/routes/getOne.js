const getOne = async (req, res) => {
    res.json(res.dish);
};

module.exports = getOne;