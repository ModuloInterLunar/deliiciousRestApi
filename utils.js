const fs = require('fs');
const logFile = 'logs/list.txt';

const logPetition = (path) => {
    const file = fs.createWriteStream(logFile, {'flags':'a'})
    const text = `Requested path: ${path}\n`;
    file.write(text)
}

exports.logPetition = logPetition;