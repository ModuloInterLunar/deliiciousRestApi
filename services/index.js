const jwt = require('jwt-simple');
const moment = require('moment');

function createToken (user) {
    const payload = {
        sub: user.id,
        iat: moment().unix(),
        exp: moment().add(12, 'hours').unix()
    }

    return jwt.encode(payload, process.env.SECRET_TOKEN || "123456");
}

function decodeToken (token) {
    const decoded = new Promise((resolve, reject) => {
        try {
            const payload = jwt.decode(token, process.env.SECRET_TOKEN || "123456");

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


module.exports = {
    createToken,
    decodeToken
};