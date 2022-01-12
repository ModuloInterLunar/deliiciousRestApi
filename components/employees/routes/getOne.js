const getOne = async (req, res) => {
    res.employee.password = "";
    res.json(res.employee);
}

module.exports = getOne;