const Employee = require('../../../models/employee');

const getEmployee = async (req, res, next) => {
    let employee;
    try {
        employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).json({ message: `Cannot find employee with id '${req.params.id}'` });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.employee = employee;
    next();
}

module.exports = getEmployee;