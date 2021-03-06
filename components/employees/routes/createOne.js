const Employee = require('../../../models/employee');
const bcrypt = require('bcrypt');
const services = require('../../../mongoose/services');
const {capitalize} = require('../../../utils');

const createOne = async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    if (!req.body.id) req.body.id = await services.generateId(Employee);
    const employee = new Employee({
        _id: req.body.id,
        username: req.body.username,
        dni: req.body.dni,
        name: capitalize(req.body.name),
        surname: capitalize(req.body.surname),
        password: hashedPassword,
        isAdmin: req.body.isAdmin
    });

    try {
        const newEmployee = await employee.save();
        newEmployee.password = "";
        res.status(201).json(newEmployee);
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ message: err.message});
    }
}

module.exports = createOne;