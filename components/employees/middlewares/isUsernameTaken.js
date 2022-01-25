const Employee = require('../../../models/employee');

const isUsernameTaken = (req, res, next) => {
    const username = req.body.username;
    if (!username) return res.status(400).json({ message: "Username missing" });
    const otherUser = Employee.findOne({ username: /^username$/i });
    if (otherUser) return res.status(403).json({ message: "Username is already in use!" });
    next();
}

module.exports = isUsernameTaken;