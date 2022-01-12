const services = require('../services');
const Employee = require('../models/employee');
const bcrypt = require('bcrypt');

const login = (req,res) => {
    Employee.findOne({ username: req.body.username }, async (err, employee) => {
        if (err) return res.status(500).send({ message: err });
        if (!employee) return res.status(404).json({ message: "Employee not found!"});
        req.employee = employee;
        if (!await bcrypt.compare(req.body.password, employee.password))
            return res.status(401).json({message: "Invalid password!"});        
        res.status(200).send({
            message: `You logged in correctly, welcome ${employee.name}`,
            token: services.createToken(employee)
        });
    });
}

module.exports = login;