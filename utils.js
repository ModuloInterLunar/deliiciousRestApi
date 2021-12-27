const fs = require('fs');
const logFile = 'logs/list.log';

const logPetition = (req) => {
    const file = fs.createWriteStream(logFile, {'flags':'a'})
    const text = `Requested path: ${req.path} | Method: ${req.method}\n`;
    console.log(text);
    file.write(text);
}

exports.logPetition = logPetition;