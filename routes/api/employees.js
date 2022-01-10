const express = require('express');
const router = express.Router();
const Employee = require('../../models/employee');
const service = require('../../services');
const bcrypt = require('bcrypt');

// Get all
router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
});

// Get One
router.get('/:id', getEmployee, async (req, res) => {
    res.json(res.employee);
});

// Create One
router.post('/', isUsernameUnique, isStrongPassword, async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const employee = new Employee({
        _id: req.body._id,
        username: req.body.username,
        dni: req.body.dni,
        name: req.body.name,
        surname: req.body.surname,
        password: hashedPassword,
        isAdmin: req.body.isAdmin
    });

    try {
        const newEmployee = await employee.save();
        res.status(201).json(newEmployee);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
});

// Updating One
router.patch('/:id', isUsernameUnique, isStrongPassword, getEmployee, async (req, res) => {

    if (req.body._id) res.employee._id = req.body._id;
    if (req.body.username) res.employee.username = req.body.username;
    if (req.body.password) res.employee.password = await bcrypt.hash(req.body.password, 10);
    if (req.body.dni) res.employee.dni = req.body.dni;
    if (req.body.name) res.employee.name = req.body.name;
    if (req.body.surname) res.employee.surname = req.body.surname;
    if (req.body.isAdmin) res.employee.isAdmin = req.body.isAdmin;

    try {
        const updatedEmployee = await res.employee.save();
        res.json(updatedEmployee);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Deleting One
router.delete('/:id', getEmployee, async (req, res) => {
    try {
        await res.employee.remove();
        res.json({ message: 'Deleted Employee'});
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
});

router.post('/login', login);

async function getEmployee(req, res, next) {
    let employee;
    try {
        employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).json({ message: 'Cannot find employee'});
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.employee = employee;
    next();
}

function login(req,res) {
    Employee.findOne({ username: req.body.username }, async (err, employee) => {
        if (err) return res.status(500).send({ message: err });
        if (!employee) return res.status(404).json({ message: "Employee not found!"});
        req.employee = employee;
        if (!await bcrypt.compare(req.body.password, employee.password))
            return res.status(401).json({message: "Invalid password!"});        
        res.status(200).send({
            message: `You logged in correctly, welcome ${employee.name}`,
            token: service.createToken(employee)
        });
    });
}

function isUsernameUnique(req, res, next) {
    Employee.findOne({ username: req.body.username}, (err, employee) => {
        if (err) return res.status(500).send({ message: err });
        if (employee) return res.status(403).json({ message: "Username already in use" });
        next();
    })
}


function isStrongPassword(req, res, next) {
    const password = req.body.password;
    if (!password) return res.status(400).json({ message: "Password missing" });
    if (password.length < 5) return res.status(403).json({ message: "Password length must be 5 or greater" });
    next();
}

module.exports = router;