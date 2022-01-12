const Employee = require('../../../models/employee');

const getAll = async (req, res) => {
    try {
        const employees = await Employee.find()
        employees.forEach((employee) => {
            employee.password = "";
        });
        res.json(employees);
    } catch (err) {
        res.status(500).json({ message: err.message});
}};

module.exports = getAll;