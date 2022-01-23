const services = require('../services');

function isAuth(req, res, next) {
    if (!req.headers.authorization){ 
        console.log(`Authentication failed; 'Token is missing' from: '${req.ip}'`);
        return res.status(401).send({ message: "Token is missing"});
    }

    const token = req.headers.authorization.split(' ')[1];

    services.decodeToken(token)
        .then( response => {
            req.employeeId = response;
            next();
        })
        .catch( response => {
            res.status(response.status).send(response.message);
        });
}

module.exports = isAuth;