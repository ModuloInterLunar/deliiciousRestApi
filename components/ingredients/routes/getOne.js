const getOne = async (req, res) => {
    res.json(res.ingredient);
};

module.exports = getOne;