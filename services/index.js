require('dotenv').config();

const jwt = require('jwt-simple');
const moment = require('moment');
const fs = require('fs');
const logFile = 'logs/list.log';

function createToken (user) {
    const payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(12, 'hours').unix()
    }

    return jwt.encode(payload, process.env.SECRET_TOKEN);
}

function decodeToken (token) {
    const decoded = new Promise((resolve, reject) => {
        try {
            const payload = jwt.decode(token, process.env.SECRET_TOKEN);

            if (payload.exp <= moment().unix()) {
                reject({
                    status: 401,
                    message: 'The token has expired!'
                });
            }

            resolve(payload.sub);

        } catch (err) {
            reject({ 
                status: 500,
                message: "Invalid Token"
            });
        }
    });
    return decoded;
}

const logPetition = (req) => {
    const text = `Requested path: ${req.path} | Method: ${req.method}\n`;
    fs.appendFile(logFile, text, err => {
        if (err) console.log(err);
        console.log(text);
    });
}

module.exports = {
    createToken,
    decodeToken,
    logPetition
};