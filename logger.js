const logToFile = require('./timelog');
const defaultPath = './timelog.log';
const message = process.argv[2];

logToFile(defaultPath, message);