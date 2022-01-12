
const updateOne = async (req, res) => {
    if (req.body.username) res.employee.username = req.body.username;
    if (req.body.password) res.employee.password = await bcrypt.hash(req.body.password, 10);
    if (req.body.dni) res.employee.dni = req.body.dni;
    if (req.body.name) res.employee.name = req.body.name;
    if (req.body.surname) res.employee.surname = req.body.surname;
    if (req.body.isAdmin) res.employee.isAdmin = req.body.isAdmin;
    try {
        const updatedEmployee = await res.employee.save();
        updatedEmployee.password = "";
        res.json(updatedEmployee);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = updateOne;