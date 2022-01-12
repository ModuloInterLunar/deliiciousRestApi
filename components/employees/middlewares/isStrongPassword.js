const isStrongPassword = (req, res, next) => {
    const password = req.body.password;
    if (!password) return res.status(400).json({ message: "Password missing" });
    if (password.length < 5) return res.status(403).json({ message: "Password length must be 5 or greater" });
    next();
}

module.exports = isStrongPassword;